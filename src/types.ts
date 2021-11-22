export type Degree = number
export type OutOf255 = number
export type Fraction = number
export type Hex = string

export type Range = [min: number, max: number]

export type ChannelObject = {
  R: number
  G: number
  B: number
}

export type ChannelArray = [r: number, g: number, b: number]

export type TuningPoint = {
  hue: number
  sat: number
}

export type ColorTuner = TuningPoint[]

export type HSL = {
  hue: number
  sat: number
  lum: number
}

export interface LuumSpec extends HSL {
  prefer: `lum` | `sat`
  tuner: ColorTuner
}

export type LuumFix = { sat: number; lum: number }
export type LuumLimit = { sat: Range; lum: Range }
