import { CHANNEL_SPECIFIC_LUM } from "../constants"

export default ({ R, G, B }) => {
  const lum =
    (CHANNEL_SPECIFIC_LUM.R * R) / 255
    + (CHANNEL_SPECIFIC_LUM.G * G) / 255
    + (CHANNEL_SPECIFIC_LUM.B * B) / 255
  // console.log('||| found lum', lum)
  return lum
}