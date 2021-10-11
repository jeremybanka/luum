import { CMYK } from "../preconfig/builtInTunerKit"
import { UI } from "../preconfig/schemes"
import { paletteToScssBlock } from "./export"
import { mixPalette } from "./import"

// const paletteTemplate = name => ({
//   id: name,
//   states: { base: { elements: {} } },
// })

export default function scssPalette(arg) {
  const {
    hex = `f00`,
    scheme = UI,
    tuner = CMYK,
  } = typeof arg === `string` ? { hex: arg } : arg
  const palette = mixPalette({
    hex,
    scheme,
  })
  const scss = paletteToScssBlock(palette, tuner)
  return scss
}
