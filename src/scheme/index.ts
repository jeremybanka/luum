import type { Filter, Hex, LuumSpec } from "@lib/index"
import type { Mix } from "@lib/mixers"

// import { CMYK } from "../constants/tuners"
// import { UI } from "../constants/schemes"
// import { paletteToScssBlock } from "./export"

type States = {
  base: Mix
  hover: Mix
  active: Mix
  disabled: Mix
}

export type Scheme = {
  root?: Mix
  filter?: Filter
  states?: States
  variables?: Record<string, Mix | States>
  children?: Record<string, Scheme>
}

export type Swatch = { wet: LuumSpec; dry?: Hex }

export type Palette<S extends Scheme> = {
  root: S[`root`] extends undefined ? undefined : Hex
  states: S[`states`] extends undefined
    ? undefined
    : {
        base: Swatch
        hover: Swatch
        active: Swatch
        disabled: Swatch
      }
  variables: S[`variables`] extends undefined
    ? undefined
    : {
        [K in keyof S[`variables`]]: S[`variables`][K] extends Mix
          ? Hex
          : {
              base: Swatch
              hover: Swatch
              active: Swatch
              disabled: Swatch
            }
      }
  children: S[`children`] extends undefined
    ? undefined
    : {
        [K in keyof S[`children`]]: Palette<S[`children`][K]>
      }
}

export interface FileScheme extends Scheme {
  file?: string
  root: Mix
}

export interface FilePalette<S extends FileScheme> extends Palette<S> {
  file: S[`file`] extends undefined ? undefined : string
}

// export default function paletteToScss(arg): string {
//   const { scheme = UI, filter = CMYK } =
//     typeof arg === `string` ? { hex: arg } : arg
//   const palette = paintScheme(scheme)
//   const scss = paletteToScssBlock(palette, filter)
//   return scss
// }
