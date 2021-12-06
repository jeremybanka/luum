import type { Filter, LuumSpec } from "~"

import { unfiltered } from "~/constants/filters"
import { defaultSpec } from "~/constants/spec"
import { specToHex } from "~/export"
import type { Mix, Mixer } from "~/mixers"
import mixers from "~/mixers"
import mapObject from "~/utils/mapObject"

import type {
  Swatch,
  InteractivePalette,
  InteractiveScheme,
  InteractiveSwatch,
  InteractiveMix,
} from "."

type MixNewSpec = (spec: LuumSpec, mix: Mix) => LuumSpec

export const mixNewSpec: MixNewSpec = (spec, mix) =>
  mix.reduce<LuumSpec>((currentColor, [name, value]) => {
    const mixer = mixers[name] as Mixer<typeof value>
    return mixer(currentColor, value)
  }, spec)

type MixNewSwatch = (spec: LuumSpec, mix: Mix, filter?: Filter) => Swatch

export const mixNewSwatch: MixNewSwatch = (spec, mix, filter) => {
  const wet = mixNewSpec(spec, mix)
  const dry = specToHex(wet, filter)
  return { wet, dry }
}

type MixPalette = <S extends InteractiveScheme>(
  scheme: S,
  parent?: {
    filter: Filter
    palette: Record<string, InteractiveSwatch> | Record<string, Swatch>
  }
) => InteractivePalette<S>

export const mixPalette: MixPalette = (scheme, parent) => {
  const filter = scheme.filter || parent?.filter || unfiltered
  const rootSpec = mixNewSpec(defaultSpec, scheme.root || [])

  const newAttributes = mapObject(
    scheme.attributes,
    (attribute: InteractiveMix) =>
      mapObject(attribute, (state: Mix) =>
        mixNewSwatch(rootSpec, state || [], filter)
      )
  )

  const palette: InteractivePalette<typeof scheme> = {
    attributes: newAttributes as InteractivePalette<typeof scheme>[`attributes`],
  }

  return palette
}
