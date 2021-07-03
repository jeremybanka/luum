import { CMYK } from "../preconfig/builtInTunerKit"
import { UI } from "../preconfig/schemes"
import { makeScssObject } from "./export"
import { mixPalette } from "./import"

// const paletteTemplate = name => ({
//   id: name,
//   states: { base: { elements: {} } },
// })

export default function scssPalette({ hex = `#f00`, scheme = UI, tuner = CMYK }) {
  const palette = mixPalette({
    hex,
    scheme,
  })
  const scss = makeScssObject(palette, tuner)
  return scss
}
