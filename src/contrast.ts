import { specToHex } from "./export"
import { hexToSpec } from "./import"

export const hardContrast = (hex: string): `black` | `white` => {
  const { lum } = hexToSpec(hex)
  const contrast = lum > 0.666 ? `black` : `white`
  return contrast
}

export const softContrast = (hex: string, tuner: ColorTuner): string => {
  const rootSpec = hexToSpec(hex)
  const newLum = rootSpec.lum > 0.666 ? 0.05 : 0.95
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
