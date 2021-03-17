const miniHexToHex = miniHex => {
  const miniHexArray = miniHex.split('')
  const hexTemplate = [0, 0, 1, 1, 2, 2]
  return (hexTemplate.map(idx => miniHexArray[idx]).join(''))
}

export default {
  proto: '[a-fA-F0-9]+',
  draft(string) {
    const r = new RegExp(`^${this.proto}$`)
    return (r.test(string) && string.length <= 6)
  },
  final(string) {
    return (string.length === 3 || string.length === 6)
  },
  exec(string) {
    const r = new RegExp(this.proto)
    return r.exec(string)[0]
  },
  process(input) {
    const hex = this.exec(input)
    switch(hex.length) {
      case 6: return (`#${hex}`)
      case 3: return (`#${miniHexToHex(hex)}`)
      default: throw new Error(`${hex} does not contain a valid hex`)
    }
  },
}
