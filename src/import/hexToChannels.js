import { validateHex } from "../utils"

export default hex => {
  const validated = validateHex.process(hex)
  const channel = idx => parseInt(validated.substr((idx * 2 + 1), 2), 16)
  return {
    R: channel(0),
    G: channel(1),
    B: channel(2),
  }
}
