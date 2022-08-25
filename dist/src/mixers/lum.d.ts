import type { LuumSpec } from "~";
export declare const clampInto: ([min, max]: [number, number]) => (value: number) => number;
export declare type Transformer<Anything> = (thing: Anything) => Anything;
export declare const apply: <T>(nextVersionOfThing: T | Transformer<T>) => (originalThing: T) => T;
export declare type Applicator<X, Y> = (next: X | ((prev: X) => X)) => Transformer<Y>;
export declare type LuumApplicator<X> = Applicator<X, LuumSpec>;
export declare type SetLum = LuumApplicator<number>;
export declare const setLum: SetLum;
export declare type TransformerCreator<X, Y> = (seed: X) => Transformer<Y>;
export declare const tint: (tintAmount: number) => (color: LuumSpec) => LuumSpec;
export declare const shade: (shadeAmount: number) => (color: LuumSpec) => LuumSpec;
//# sourceMappingURL=lum.d.ts.map