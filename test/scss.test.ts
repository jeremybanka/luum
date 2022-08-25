import { luumToCss } from "../src"
import { tint } from "../src/mixers/lum"
import type { LuumCssRule } from "../src/scheme"

describe(`luumToCss`, () => {
  it(`should return the same hex if no scheme is provided`, () => {
    const cssRule: LuumCssRule = {
      rootSelectors: [`root`],
      root: { hue: 0, sat: 255, lum: 0, prefer: `sat` },
      attributes: [`background-color`, tint(6)],
    }
    const css = luumToCss(cssRule)
    expect(css).toBe(`root {
  background-color: #ff0000;
}`)
  })
})
