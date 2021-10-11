import { specToHex } from './export'
import { hexToSpec } from './import'

export function hardContrast(hex) {
  const { lum } = hexToSpec(hex)
  const contrast = lum > 0.666
    ? `black`
    : `white`
  return contrast
}

export function softContrast(hex, tuner) {
  const rootSpec = hexToSpec(hex)
  const newLum = rootSpec.lum > 0.666
    ? 0.05
    : 0.95
  const newHex = specToHex({
    ...rootSpec,
    lum: newLum,
    prefer: `lum`,
    tuner,
  })
  return newHex
}

// input: red
// hard standout: white
