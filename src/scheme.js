import { specToHex } from './export'
import { hexToSpec } from './import'
import { specificLumFromHue } from './solveFor'

export function mixPalettes({
  palettes,
  hexes,
  ops,
  place: [paletteIdx, stateKey, elementKey] = [0, null, null],
}) {
  if(!Array.isArray(palettes) || palettes.length === 0) throw new Error('Must provide at least one palette')

  let palettes_ = [...palettes]
  const palette = palettes_[paletteIdx]
  const state = stateKey
    ? palette.states[stateKey]
    : null
  const element = elementKey
    ? state.elements[elementKey]
    : null
  const destination = element || state || palette
  const origin = element ? state : palette

  if(!origin && hexes.length === 0) throw new Error('Must provide at least one hex')

  if(!origin.color) origin.color = hexToSpec(hexes[0])
  let color  = { ...origin.color }

  const opsEntries = Object.entries(ops)
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
  for(let idx = 0; idx < opsEntries.length; idx++) {
    const [key, value] = opsEntries[idx]
    /*
    console.log("    > color", ...color)
    console.log('     ', key)
    console.log('     ', value)
    */
    switch(key) {
      case 'color': // change colors
        // capture currentColor in palette
        switch(typeof value) {
          case 'number':
            color = hexToSpec(hexes[value])
            break
          case 'string':
            hexes.unshift(value)
            color = hexToSpec(value)
            break
          default: throw new Error(`'color' accepts types 'string' or 'number'; got type '${typeof value}'`)
        }
        break
      case 'hue':
      case 'sat':
      case 'lum':
        switch(typeof value) {
          case 'number':
            color[key] = value
            break
          case 'function':
            color[key] = value(color[key])
            break
          default: throw new Error(`hue, sat, lum accept types 'number' or 'function'; got type '${typeof value}'`)
        }
        break
      case 'contrast':
        switch(value) {
          case 'hard': color.lum = color.lum > 0.67
            ? 0
            : 1
            break
          case 'soft': color.lum = color.lum > 0.67
            ? 0.05
            : 0.95
            break
          case 'harden': color.lum = color.lum > 0.67
            ? 0
            : 1
            break
          default: throw new Error(`'contrast' accepts 'hard' or 'soft'; got '${value}'`)
        }
        color.prefer = 'lum'
        break
      case 'split':
      case 'trine':
      case 'tetra': break
      case 'warm':
      case 'cool': break
      case 'amp':
      case 'mute': break
      case 'tint':
      case 'shade':
        const percentSaturated = color.sat / 255
        const specificLum = specificLumFromHue(color.hue)
        const lightAdjust = 0.5 * (1 - percentSaturated) + specificLum * percentSaturated
        const charge = key === 'tint' ? 100 : -100
        const offset = lightAdjust * value / charge
        // console.log('lightAdjust', lightAdjust)
        // console.log('offset', offset)
        color.lum += offset
        if(color.lum < 0 || color.lum > 1) color.lum -= 2.5 * offset
        color.prefer = 'lum'
        break
      case 'holds':
        const holdsEntries = Object.entries(value)
        for(let holdsEntryIdx = 0; holdsEntryIdx < holdsEntries.length; holdsEntryIdx++) {
          const [subPaletteId, subPaletteOps] = holdsEntries[holdsEntryIdx]
          const externalElements = {}
          const baseElementsEntries = Object.entries(palette.states.base.elements)
          for(let baseElementsIdx = 0; baseElementsIdx < baseElementsEntries.length; baseElementsIdx++) {
            const [baseElementKey, baseElementValue] = baseElementsEntries[baseElementsIdx]
            externalElements[`ex-${baseElementKey}`] = baseElementValue
          }
          palettes_.push({
            id: subPaletteId,
            color: palettes_[0].color,
            states: { base: { id: 'base', elements: externalElements } },
          })
          palettes_ = mixPalettes({
            palettes: palettes_,
            hexes,
            ops: subPaletteOps,
            place: [palettes_.length - 1, null, null],
          })
        }
        break
      case 'state':
        const stateEntries = Object.entries(value)
        if(!element) {
          for(let stateEntryIdx = 0; stateEntryIdx < stateEntries.length; stateEntryIdx++) {
            const [stateKey_, stateOps] = stateEntries[stateEntryIdx]
            // console.log('    ||| stateEntry', stateKey_, stateOps)
            palette.states[stateKey_] = {
              id: stateKey_,
              elements: {},
            }
            palette.states[stateKey_].color = mixPalettes({
              palettes,
              hexes,
              ops: stateOps,
              place: [paletteIdx, stateKey_, null],
            })
            // console.log('      ', palette.states[stateKey_].hex)
          }
        } else {
          for(let stateEntryIdx = 0; stateEntryIdx < stateEntries.length; stateEntryIdx++) {
            const [stateKey_, stateOps] = stateEntries[stateEntryIdx]
            // console.log('    ||| >>> stateEntry', stateKey_, stateOps)
            // console.log('    ||| >>> elementKey', elementKey)
            const state_ = palette.states[stateKey_]
            if(!state_.elements[elementKey]) state_.elements[elementKey] = {}
            palette.states[stateKey_].elements[elementKey].hex = mixPalettes({
              palettes,
              hexes,
              ops: stateOps,
              place: [paletteIdx, stateKey_, elementKey],
            })
          }
        } break
      default:
        const elementKey_ = key
        const stateKeys = Object.keys(palette.states)
        for(let stateKeysIdx = 0; stateKeysIdx < stateKeys.length; stateKeysIdx++) {
          const stateKey_ = stateKeys[stateKeysIdx]
          const state_ = palette.states[stateKey_]
          // console.log('    ||| state_', state_)
          state_.elements[elementKey_] = { id: elementKey_ }
          state_.elements[elementKey_].color = mixPalettes({
            palettes,
            hexes,
            ops: value,
            place: [paletteIdx, stateKey_, elementKey_],
          })
        }
    }
    // hex = specToHex({ ...color, tuner })
    destination.color = color
    if(!state) destination.states.base.color = color

    // console.log("    < color", color, color)
    // console.log("      set", { ...destination }.id)
  }
  if(element || state) {
    // console.log('---', destination.id, 'color', color)
    return color
  }
  // console.log('--- returning palettes_', palettes_)
  return palettes_
}

function paletteToScssBlock(palette, tuner) {
  let scssBlock = ''
  const baseEntries = Object.entries(palette.states.base.elements)
  for(let baseIdx = 0; baseIdx < baseEntries.length; baseIdx++) {
    const [key, element] = baseEntries[baseIdx]
    scssBlock += `  --${key}-color: ${specToHex({ ...element.color, tuner })};\n`
  }
  const stateEntries = Object.entries(palette.states)
  for(let stateIdx = 0; stateIdx < stateEntries.length; stateIdx++) {
    const [stateKey, stateObj] = stateEntries[stateIdx]
    // console.log('stateKey', stateKey)
    switch(stateKey) {
      case 'hover':
        scssBlock += `  &:hover, &:focus, &:focus-within {\n`
        break
      case 'active':
        scssBlock += `  &:active, &.active {\n`
        break
      case 'disabled':
        scssBlock += `  &:disabled, &.disabled {\n`
        break
      default: continue
    }
    const elementEntries = Object.entries(stateObj.elements)
    for(let elementIdx = 0; elementIdx < elementEntries.length; elementIdx++) {
      const [key, element] = elementEntries[elementIdx]
      scssBlock += `    --${key}-color: ${specToHex({ ...element.color, tuner })};\n`
    }
    scssBlock += '  }\n'
  }
  return scssBlock
}

function paletteToScssClassRule(palette, tuner) {
  let scssRule = `.${palette.id} {\n`
  scssRule += paletteToScssBlock(palette, tuner)
  scssRule += '}\n'
  return scssRule
}
export function compileScssSheet(palettes, tuner) {
  let scssSheet = ''
  for(let idx = 0; idx < palettes.length; idx++) {
    const palette = palettes[idx]
    const scssRule = paletteToScssClassRule(palette, tuner)
    scssSheet += `${scssRule}`
  }
  return scssSheet
}

function makeScssObject(palettes, tuner) {
  const scssObject = {}
  for(let index = 0; index < palettes.length; index++) {
    const palette = palettes[index]
    scssObject[palette.id] = paletteToScssBlock(palette, tuner)
  }
  return scssObject
}

const paletteTemplate = name => ({
  id: name,
  states: { base: { elements: {} } },
})
export default function makeColorPalettesFromHexes({ hexes, scheme, tuner }) {
  const schemeEntries = Object.entries(scheme)
  let palettes = []
  for(let idx = 0; idx < schemeEntries.length; idx++) {
    const [name, ops] = schemeEntries[idx]
    const newPalettes = mixPalettes({
      palettes: [paletteTemplate(name)],
      hexes,
      ops,
    })
    palettes = [...palettes, ...newPalettes]
  }
  const scss = makeScssObject(palettes, tuner)
  // console.log(scss)
  return scss
}
