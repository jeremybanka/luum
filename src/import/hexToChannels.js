import validateHex from "./validateHex"

export default input => {
  const hex = validateHex.parse(input)
  const getHexcodeChannel = nameOfChannel => {
    switch (nameOfChannel) {
      case `r`: return hex.substr(1, 2)
      case `g`: return hex.substr(3, 2)
      case `b`: return hex.substr(5, 2)
      default: throw new Error(`strange channel name`)
    }
  }
  const rBase10 = parseInt(getHexcodeChannel(`r`), 16)
  const gBase10 = parseInt(getHexcodeChannel(`g`), 16)
  const bBase10 = parseInt(getHexcodeChannel(`b`), 16)

  return {
    R: rBase10,
    G: gBase10,
    B: bBase10,
  }
}
