import { pipe } from "fp-ts/lib/function"

import type { LuumSpec } from "~"

export const clampInto =
  ([min, max]: [number, number]) =>
  (value: number): number =>
    value > max ? max : value < min ? min : value
export type Transformer<Anything> = (thing: Anything) => Anything

/* eslint-disable prettier/prettier */
export const apply =

  <T>(nextVersionOfThing: T | Transformer<T>): ((originalThing: T) => T) =>

  (originalThing) =>
    nextVersionOfThing instanceof Function
      ? nextVersionOfThing(originalThing)
      : nextVersionOfThing
/* eslint-enable prettier/prettier */

export type Applicator<X, Y> = (next: X | ((prev: X) => X)) => Transformer<Y>

export type LuumApplicator<X> = Applicator<X, LuumSpec>

export type SetLum = LuumApplicator<number>

export const setLum: SetLum = (newLum) => (currentColor) => {
  const newColor = {
    ...currentColor,
    lum: pipe(currentColor.lum, apply(newLum), clampInto([0, 1])),
  }
  console.log(newColor)
  return newColor
}

export type TransformerCreator<X, Y> = (seed: X) => Transformer<Y>

export const tint =
  (tintAmount: number) =>
  (color: LuumSpec): LuumSpec =>
    setLum((lum) => (lum * 100 + tintAmount) / 100)(color)

export const shade =
  (shadeAmount: number) =>
  (color: LuumSpec): LuumSpec =>
    setLum((lum) => (lum * 100 - shadeAmount) / 100)(color)
