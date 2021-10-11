const BASE_16_CHAR_SET = `[a-fA-F0-9]+`

const miniHexToHex = miniHex => {
  const miniHexArray = miniHex.split(``)
  const hexTemplate = [0, 0, 1, 1, 2, 2]
  return (hexTemplate.map(idx => miniHexArray[idx]).join(``))
}

export function parseHex(mightContainHex) {
  return mightContainHex
}

export default {
  base16CharSet: `[a-fA-F0-9]+`,
  exec(string) {
    const r = new RegExp(BASE_16_CHAR_SET)
    return r.exec(string) ? r.exec(string)[0] : null
  },
  hexIsValidDraft(string) {
    const r = new RegExp(`^${BASE_16_CHAR_SET}$`)
    return (r.test(string) && string.length <= 6)
  },
  hexIsValid(string) {
    return (string.length === 3 || string.length === 6)
  },
  parse(input) {
    const hex = this.exec(input)
    switch (hex.length) {
      case 6: return (`#${hex}`)
      case 3: return (`#${miniHexToHex(hex)}`)
      default: throw new Error(`${hex} does not contain a valid hex`)
    }
  },
}
