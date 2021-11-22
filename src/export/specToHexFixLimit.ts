import type { Hex, LuumFix, LuumLimit, LuumSpec } from "@app/types"

import channelsToHex from "./channelsToHex"
import specToChannels from "./specToChannelsFixLimit"

type SpecToHexFixLimit = (spec: LuumSpec) => {
  hex: Hex
  fix: LuumFix
  limit: LuumLimit
}

const specToHexFixLimit: SpecToHexFixLimit = ({
  hue,
  sat,
  lum,
  prefer,
  tuner,
}) => {
  const { channels, fix, limit } = specToChannels({
    hue,
    sat,
    lum,
    prefer,
    tuner,
  })
  const { R, G, B } = channels
  const hex = channelsToHex({ R, G, B })

  // console.log('--- newHex', hex)

  return { hex, fix, limit }
}

export default specToHexFixLimit
