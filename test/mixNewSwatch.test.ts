import type { Mix } from "@lib/mixers"
import type { Swatch } from "@lib/scheme"

import { mixNewSwatch } from "../src/scheme/import"

describe(`mixNewSwatch`, () => {
  it(`should return the same hex if no scheme is provided`, () => {
    const swatch: Swatch = {
      wet: { hue: 0, sat: 255, lum: 0, prefer: `sat` },
      dry: `#ff0000`,
    }
    const mix: Mix = [
      [`split`, 1],
      [`prefer`, `lum`],
      [`contrast`, 1],
    ]
    const newSwatch = mixNewSwatch(swatch, mix)
    console.log(newSwatch)
    expect(newSwatch.wet.hue).toBeCloseTo(150)
  })
})
