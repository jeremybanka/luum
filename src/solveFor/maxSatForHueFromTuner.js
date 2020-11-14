import { wrapAround } from "../utils"

export default (hue, tuner) => {
  let maxSat = 255
  for(let a = -1, b = 0; b < tuner.length; a++, b++) {
    a = wrapAround(a, [0, tuner.length])
    // console.log('||| a =', a, 'b =', b)
    const tuningPointA = tuner[a]
    const tuningPointB = tuner[b]
    if(
      hue >= wrapAround(tuningPointA.hue, [0, 360]) &&
      hue < tuningPointB.hue
    ) {
      // console.log('||| hue', hue, 'is between', tuningPointA.hue, 'and', tuningPointB.hue)
      let $ = hue // 70
      $ -= tuningPointA.hue // 70 - 50 = 20
      $ /= tuningPointB.hue - tuningPointA.hue // 20 / (120 - 50) = 2/7
      $ *= tuningPointB.sat - tuningPointA.sat // -128 * 2 / 7 = -256 / 7 ~= -37
      $ += tuningPointA.sat
      Math.round($)
      // console.log('||| _', _)
      maxSat = $
    }
  }
  // console.log('--- maxSat', maxSat)
  return maxSat
}
