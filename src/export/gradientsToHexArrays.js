import { specToHex } from '.' // eslint-disable-line
import { interpolate } from '../utils'

function interpolateChanges(rootSpec, currentStep, axes) {
  const changes = {}
  for(let axisIdx = 0; axisIdx < axes.length; axisIdx++) {
    const currentAxis = axes[axisIdx]
    const { attribute, relative } = currentAxis
    const rootValue = rootSpec[attribute]
    const to = () => {
      switch(typeof currentAxis.to) {
        case 'number':
          if(!relative) return currentAxis.to
          return rootValue + currentAxis.to
        case 'function':
          return currentAxis.to(rootSpec[attribute])
        default: throw new Error((
          `gradient axis type error:\n` +
          `currentAxis.to is ${currentAxis.to} (type: ${typeof currentAxis.to})\n` +
          `type must be\n` +
          `* 'number'    (for absolute values) or\n` +
          `* 'function'  (for values relative to the root value).`
        ))
      }
    }
    const from = () => {
      switch(typeof currentAxis.from) {
        case 'undefined':
          return rootSpec[attribute]
        case 'number':
          if(!relative) return currentAxis.from
          return rootValue + currentAxis.from
        case 'function':
          return currentAxis.from(rootSpec[attribute])
        default: throw new Error((
          `gradient axis type error:\n` +
          `currentAxis.from is ${currentAxis.from} (type: ${typeof currentAxis.from})\n` +
          `type must be\n` +
          `* 'undefined' (to default to the root value)\n` +
          `* 'number'    (for absolute values) or\n` +
          `* 'function'  (for values relative to the root value).`
        ))
      }
    }
    const value = interpolate({
      completionRatio: currentStep,
      range: [to(), from()],
    })
    changes[attribute] = value
  }
  // console.log('>>> changes', changes)
  return changes
}

function gradientToHexArray(rootSpec, gradient, tuner) {
  const { steps, axes, prefer } = gradient
  const hexArray = []
  for(let stepIdx = 0; stepIdx < steps.length; stepIdx++) {
    const currentStep = steps[stepIdx]
    const changes = interpolateChanges(
      rootSpec,
      currentStep,
      axes,
    )
    const hex = specToHex({
      ...rootSpec,
      ...changes,
      prefer,
      tuner,
    })
    hexArray.push(hex)
  }
  return hexArray
}

export default (originalColorObject, tuner) => {
  const { gradients } = originalColorObject
  const { hue, sat, lum } = originalColorObject
  const rootSpec = { hue, sat, lum }
  const hexArrays = []
  for(let gradientIdx = 0; gradientIdx < gradients.length; gradientIdx++) {
    const gradient = gradients[gradientIdx]
    const hexArray = gradientToHexArray(rootSpec, gradient, tuner)
    hexArrays.push(hexArray)
  }
  return hexArrays
}
