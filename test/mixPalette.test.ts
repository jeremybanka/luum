import type { LuumSpec } from "~"

import type { InteractiveScheme } from "~/scheme"
import { paletteToScssRule } from "~/scheme"
import { mixPalette } from "~/scheme/import"

describe(`mixPalette`, () => {
  it(`should return the same hex if no scheme is provided`, () => {
    const blue: LuumSpec = {
      hue: 200,
      sat: 255,
      lum: 0,
      prefer: `lum`,
    }

    const scheme: InteractiveScheme = {
      root: [[`spec`, blue]],
      attributes: {
        "--color-bg": {
          base: [[`lum`, 95]],
          hover: [[`lum`, 100]],
          active: [[`prefer`, `sat`]],
          disabled: [[`lum`, 0]],
        },
        "--color-fg": {
          base: [
            [`fix`, `sat`],
            [`shade`, 10],
          ],
          hover: [[`fix`, `sat`]],
          active: [[`lum`, 0]],
          disabled: [[`lum`, 0]],
        },
      },
    }
    const palette = mixPalette(scheme)
    console.log(palette)
    const css = paletteToScssRule(`input[type="whatever"]`, palette)
    console.log(css)
    //    expect(palette).toBeCloseTo(150)
  })
})
