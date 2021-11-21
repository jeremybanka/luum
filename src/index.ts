import { HUE_STRUCTURES, CHANNEL_SPECIFIC_LUM } from "./constants"
import { noFilter, CMYK, UI } from "./constants"
import { softContrast, hardContrast } from "./contrast"
import { specToHex, specToHexFixLimit, gradientsToHexArrays } from "./export"
import nameHue from "./identify/nameHue"
import {
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
  normalizeHex,
} from "./import"
import {
  maxSatForHueFromTuner,
  hueFromChannels,
  satFromChannels,
  lumFromChannels,
  specificLumFromHue,
} from "./solveFor"
import { clamp, interpolate, wrapAround } from "./utils"

export {
  softContrast,
  hardContrast,
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
  specToHex,
  specToHexFixLimit,
  gradientsToHexArrays,
  maxSatForHueFromTuner,
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
  noFilter,
  CMYK,
  UI,
}
