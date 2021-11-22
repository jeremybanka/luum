import { HUE_STRUCTURES, CHANNEL_SPECIFIC_LUM } from "./constants"
import { unfiltered, CMYK } from "./constants/filters"
import { UI } from "./constants/schemes"
import { specToHex, specToHexFixLimit } from "./export"
import nameHue from "./identify/nameHue"
import {
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
  normalizeHex,
} from "./import"
import {
  maxSatForHueInFilter,
  hueFromChannels,
  satFromChannels,
  lumFromChannels,
  specificLumFromHue,
} from "./solveFor"
import { clamp, interpolate, wrapAround } from "./utils"
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

export type FilterPoint = {
  hue: number
  sat: number
}

export type Filter = FilterPoint[]

export type HSL = {
  hue: number
  sat: number
  lum: number
}

export interface LuumSpec extends HSL {
  prefer: `lum` | `sat`
  filter?: Filter
}

export type LuumFix = { sat: number; lum: number }
export type LuumLimit = { sat: Range; lum: Range }

export {
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
  specToHex,
  specToHexFixLimit,
  maxSatForHueInFilter,
  hueFromChannels,
  satFromChannels,
  lumFromChannels,
  specificLumFromHue,
  nameHue,
  clamp,
  interpolate,
  wrapAround,
  normalizeHex,
  HUE_STRUCTURES,
  CHANNEL_SPECIFIC_LUM,
  unfiltered,
  CMYK,
  UI,
}
