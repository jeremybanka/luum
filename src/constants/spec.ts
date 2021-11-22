import type { LuumSpec } from "@lib/index"

import { CMYK } from "./filters"

export const defaultSpec: LuumSpec = {
  hue: 0,
  lum: 0,
  sat: 0,
  prefer: `lum`,
  filter: CMYK,
}
