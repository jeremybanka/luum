import { hexToSpec } from "../import"
import { specificLumFromHue } from "../solveFor"

/* eslint-disable no-case-declarations */

export function mixPalette({
  hex,
  scheme,
  palette = { states: { base: { elements: {} } } },
  place: [stateKey, elementKey] = [0, null, null],
}) {
  // console.log(`hex`, hex)
  // console.log(`| scheme`, scheme)
  // console.log(`| palette`, palette)
  // console.log(`| stateKey`, stateKey)
  // console.log(`| elementKey`, elementKey)

  const palette_ = { ...palette }
  const state = stateKey ? palette_.states[stateKey] : null
  const element = elementKey ? state.elements[elementKey] : null
  const destination = element || state || palette_
  const origin = element ? state : palette_

  if (!origin && !hex) throw new Error(`Must provide a hex`)

  if (!origin.color) origin.color = hexToSpec(hex)
  const color = { ...origin.color }
  const schemeEntries = Object.entries(scheme)
  /*
  console.log("--- from", { ...origin }.id, 'to', { ...destination }.id,
    `[${paletteIdx}, ${stateKey}, ${elementKey}]`,
  )
  console.log("    ||| origin", origin)
  console.log("    ||| hexes", hexes)
  console.log("    ||| color", color)
  console.log("    ||| ops", ops)
  console.log("    ||| palette", [...palette])
  */
  for (const [key, value] of schemeEntries) {
    /*
    console.log("    > color", ...color)
    console.log('     ', key)
    console.log('     ', value)
    */
    switch (key) {
      case `hue`:
      case `sat`:
      case `lum`:
        switch (typeof value) {
          case `number`:
            color[key] = value
            break
          case `function`:
            color[key] = value(color[key])
            break
          // eslint-disable-next-line max-len
          default:
            throw new Error(
              `accept types 'number' or 'function'; got type '${typeof value}'`
            )
        }
        break
      case `contrast`:
        switch (value) {
          case `hard`:
            color.lum = color.lum > 0.67 ? 0 : 1
            break
          case `soft`:
            color.lum = color.lum > 0.67 ? 0.05 : 0.95
            break
          case `harden`:
            color.lum = color.lum > 0.67 ? 0 : 1
            break
          // eslint-disable-next-line max-len
          default:
            throw new Error(
              `'contrast' accepts 'hard' or 'soft'; got '${value}'`
            )
        }
        color.prefer = `lum`
        break
      case `split`:
      case `trine`:
      case `tetra`:
        break
      case `warm`:
      case `cool`:
        break
      case `amp`:
      case `mute`:
        break
      case `tint`:
      case `shade`:
        const percentSaturated = color.sat / 255
        const specificLum = specificLumFromHue(color.hue)
        const lightAdjust =
          0.5 * (1 - percentSaturated) + specificLum * percentSaturated
        const charge = key === `tint` ? 100 : -100
        const offset = (lightAdjust * value) / charge
        // console.log('lightAdjust', lightAdjust)
        // console.log('offset', offset)
        color.lum += offset
        if (color.lum < 0 || color.lum > 1) color.lum -= 2.5 * offset
        color.prefer = `lum`
        break

      case `state`:
        const stateEntries = Object.entries(value)
        if (!element) {
          for (const [stateKey_, stateScheme] of stateEntries) {
            // console.log('    ||| stateEntry', stateKey_, stateOps)
            palette_.states[stateKey_] = {
              id: stateKey_,
              elements: {},
            }
            palette_.states[stateKey_].color = mixPalette({
              hex,
              scheme: stateScheme,
              palette,
              place: [stateKey_, null],
            })
            // console.log('      ', palette.states[stateKey_].hex)
          }
        } else {
          for (const [stateKey_, stateOps] of stateEntries) {
            // console.log('    ||| >>> stateEntry', stateKey_, stateOps)
            // console.log('    ||| >>> elementKey', elementKey)
            const state_ = palette_.states[stateKey_]
            if (!state_.elements[elementKey]) state_.elements[elementKey] = {}
            palette_.states[stateKey_].elements[elementKey].hex = mixPalette({
              hex,
              scheme: stateOps,
              palette: palette_,
              place: [stateKey_, elementKey],
            })
          }
        }
        break
      default:
        const elementKey_ = key
        const stateKeys = Object.keys(palette_.states)
        for (const stateKey_ of stateKeys) {
          const state_ = palette_.states[stateKey_]
          // console.log('    ||| state_', state_)
          state_.elements[elementKey_] = { id: elementKey_ }
          state_.elements[elementKey_].color = mixPalette({
            hex,
            scheme: value,
            palette,
            place: [stateKey_, elementKey_],
          })
        }
    }
    // hex = specToHex({ ...color, tuner })
    destination.color = color
    if (!state) destination.states.base.color = color

    // console.log("    < color", color, color)
    // console.log("      set", { ...destination }.id)
  }
  if (element || state) {
    // console.log('---', destination.id, 'color', color)
    return color
  }
  // console.log('--- returning palettes_', palettes_)
  // console.log(palette_)
  return palette_
}

/* eslint-disable */

// case 'holds':
//   const holdsEntries = Object.entries(value)
//   for(let holdsEntryIdx = 0; holdsEntryIdx < holdsEntries.length; holdsEntryIdx++) {
//     const [subPaletteId, subPaletteScheme] = holdsEntries[holdsEntryIdx]
//     const externalElements = {}
//     const baseElementsEntries = Object.entries(palette.states.base.elements)
//     for(let baseElementsIdx = 0; baseElementsIdx < baseElementsEntries.length; baseElementsIdx++) {
//       const [baseElementKey, baseElementValue] = baseElementsEntries[baseElementsIdx]
//       externalElements[`ex-${baseElementKey}`] = baseElementValue
//     }
//     palettes_.push({
//       id: subPaletteId,
//       color: palettes_[0].color,
//       states: { base: { id: 'base', elements: externalElements } },
//     })
//     palettes_ = mixPalette({
//       palettes: palettes_,
//       hex,
//       ops: subPaletteScheme,
//       place: [palettes_.length - 1, null, null],
//     })
//   }
//   break

// case 'color': // change colors
//         // capture currentColor in palette
//         switch(typeof value) {
//           case 'number':
//             color = hexToSpec(hex)
//             break
//           case 'string':
//             hex.unshift(value)
//             color = hexToSpec(value)
//             break
//           default: throw new Error(`'color' accepts types 'string' or 'number'; got type '${typeof value}'`)
//         }
//         break
