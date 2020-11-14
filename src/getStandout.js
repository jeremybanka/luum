import hexToSpec from './import/hexToSpec'

export default hex => {
  const { lum } = hexToSpec(hex)
  const standOut = lum > 0.666
    ? 'black'
    : 'white'
  return standOut
}

// input: red
// hard standout: white