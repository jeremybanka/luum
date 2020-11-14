import hexToSpec from './import/hexToSpec'
import specToHex from './export/specToHex'

export default ({
  hex,
  tuner,
  offsets,
}) => {
  const rootSpec = hexToSpec(hex)
  const changes = {}
  for(let index = 0; index < offsets.length; index++) {
    const { attribute, offsetValue } = offsets[index]
    const rootValue = rootSpec[attribute]
    const { sat } = rootSpec
    let newValue
    switch(attribute) {
      case 'hue':
      case 'sat':
        newValue = rootValue + offsetValue
        break
      case 'lum':
        if(offsetValue + rootValue < 0 || offsetValue + rootValue > 1) {
          newValue = rootValue - (offsetValue - (sat >= 170 ? offsetValue * (sat - 170) / 85 : 0)) * 1.67
        } else { newValue = rootValue + (offsetValue - (sat >= 170 ? 0.333 * offsetValue * (sat - 170) / 85 : 0)) }
        break
      default:
        throw new Error('Received spec attribute other than "hue," "sat," or "lum."')
    }
    changes[attribute] = newValue
  }
  const newHex = specToHex({
    ...rootSpec,
    ...changes,
    prefer: 'lum',
    tuner,
  })
  return newHex
}
