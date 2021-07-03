import { specToHex } from '../export'

export function paletteToScssBlock(palette, tuner) {
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

export function paletteToScssClassRule(palette, tuner) {
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

export function makeScssObject(palettes, tuner) {
  const scssObject = {}
  for(let index = 0; index < palettes.length; index++) {
    const palette = palettes[index]
    scssObject[palette.id] = paletteToScssBlock(palette, tuner)
  }
  return scssObject
}
