import specToHexFixLimit from "./specToHexFixLimit"

export default ({ hue, sat, lum, prefer, tuner }: LuumSpec): Hex => {
  const { hex } = specToHexFixLimit({ hue, sat, lum, prefer, tuner })
  return hex
}
