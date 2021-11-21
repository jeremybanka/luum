import { CMYK } from "../../src/constants/builtInTunerKit"
import maxSatForHueFromTuner from "../../src/solveFor/maxSatForHueFromTuner"

test(`simulateCMYK desaturates pure green 50%`, () => {
  const hue = 120
  const tuner = CMYK
  const maxSat = 127
  expect(maxSatForHueFromTuner(hue, tuner)).toEqual(maxSat)
})

test(`simulateCMYK desaturates pure green+360 50%`, () => {
  const hue = 480
  const tuner = CMYK
  const maxSat = 127
  expect(maxSatForHueFromTuner(hue, tuner)).toEqual(maxSat)
})
