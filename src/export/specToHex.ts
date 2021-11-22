import type { Hex, LuumSpec } from "@lib/index"

import specToHexFixLimit from "./specToHexFixLimit"

export default ({ hue, sat, lum, prefer, filter }: LuumSpec): Hex => {
  const { hex } = specToHexFixLimit({ hue, sat, lum, prefer, filter })
  return hex
}
