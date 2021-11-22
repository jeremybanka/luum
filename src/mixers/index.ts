import { hexToSpec } from "@lib/import"
import type { LuumSpec } from "@lib/index"

import contrast from "./contrast"
import { setHue, split, tetra, trine } from "./hue"
import { setLum, shade, tint } from "./lum"
import { setSat, amp, mute } from "./sat"

export type MixerArgs = {
  hex: string
  spec: LuumSpec
  hue: number
  sat: number
  lum: number
  prefer: `lum` | `sat`
  contrast: 0 | 1 | 2
  amp: number
  mute: number
  tint: number
  shade: number
  split: number
  tetra: number
  trine: number
  //cool: number
  //warm: number
}

export type MixerName = keyof MixerArgs

export type MixTuple<N extends MixerName> = [N, MixerArgs[N]]

export type Mix = MixTuple<keyof MixerArgs>[]

export type Mixer<V> = (color: LuumSpec, value: V) => LuumSpec

const mixers: {
  [Name in MixerName]: Mixer<MixerArgs[Name]>
} = {
  hex: (color, value) => ({ ...color, ...hexToSpec(value) }),
  spec: (color, value) => ({ ...value, filter: color.filter }),
  hue: setHue,
  sat: setSat,
  lum: setLum,
  prefer: (color, value) => ({ ...color, prefer: value }),
  amp,
  contrast,
  mute,
  tint,
  shade,
  split,
  tetra,
  trine,
}

export default mixers
