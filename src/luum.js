import scheme from './scheme'
import getStandout from './getStandout'
import getOffset from './getOffset'
import {
  softContrast,
  hardContrast,
} from './contrast'
import {
  channelsToSpec,
  hexToChannels,
  hexToSpec,
  hueToRelativeChannels,
} from './import'
import {
  specToHex,
  specToHexFixLimit,
  gradientsToHexArrays,
} from './export'
import {
  maxSatForHueFromTuner,
  hueFromChannels,
  satFromChannels,
  lumFromChannels,
  specificLumFromHue,
}  from './solveFor'
import nameHue from './identify/nameHue'
import {
  funnel,
  interpolate,
  wrapAround,
  validateHex,
} from './utils'
import {
  HUE_STRUCTURES,
  CHANNEL_SPECIFIC_LUM,
} from './constants'
import {
  builtInTunerKit,
  schemes,
} from './preconfig'

export {
  scheme,
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
  builtInTunerKit,
  schemes,
}
