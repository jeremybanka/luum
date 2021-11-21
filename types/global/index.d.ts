declare type Degree = number
declare type OutOf255 = number
declare type Fraction = number
declare type Hex = string

declare type Range = [min: number, max: number]

declare type ChannelObject = {
  R: number
  G: number
  B: number
}

declare type ChannelArray = [r: number, g: number, b: number]

declare type TuningPoint = {
  hue: number
  sat: number
}

declare type ColorTuner = TuningPoint[]

declare type HSL = {
  hue: number
  sat: number
  lum: number
}

declare interface LuumSpec extends HSL {
  prefer: `lum` | `sat`
  tuner: ColorTuner
}

declare type LuumFix = { sat: number; lum: number }
declare type LuumLimit = { sat: Range; lum: Range }
