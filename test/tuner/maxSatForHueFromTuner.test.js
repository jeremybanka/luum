const maxSatForHueFromTuner = require("../../src/solveFor/maxSatForHueFromTuner").default
const tuners = require("../../src/preconfig/builtInTunerKit").default

test("simulateCMYK desaturates pure green 50%", () => {
  const hue = 120
  const tuner = tuners.simulateCMYK
  const maxSat = 127
  expect(maxSatForHueFromTuner(hue, tuner)).toEqual(maxSat)
})

test("simulateCMYK desaturates pure green+360 50%", () => {
  const hue = 480
  const tuner = tuners.simulateCMYK
  const maxSat = 127
  expect(maxSatForHueFromTuner(hue, tuner)).toEqual(maxSat)
})
