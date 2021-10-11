import scssPalette from "./palette"
import getStandout from "./getStandout"
import getOffset from "./getOffset"
import { softContrast, hardContrast } from "./contrast"
import {
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
  validateHex,
} from "./import"
import { specToHex, specToHexFixLimit, gradientsToHexArrays } from "./export"
import {
  maxSatForHueFromTuner,
  hueFromChannels,
  satFromChannels,
  lumFromChannels,
  specificLumFromHue,
} from "./solveFor"
import nameHue from "./identify/nameHue"
import { funnel, interpolate, wrapAround } from "./utils"
import { HUE_STRUCTURES, CHANNEL_SPECIFIC_LUM } from "./constants"
import { noFilter, CMYK, UI } from "./preconfig"

export {
  getStandout,
  getOffset,
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
  funnel,
  interpolate,
  wrapAround,
  validateHex,
  HUE_STRUCTURES,
  CHANNEL_SPECIFIC_LUM,
  noFilter,
  CMYK,
  UI,
}

export default scssPalette
