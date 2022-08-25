import type { Fraction } from "~";
declare type Interpolate = (args: {
    completionRatio: Fraction;
    range: [to: number, from: number];
}) => number;
declare const interpolate: Interpolate;
export default interpolate;
//# sourceMappingURL=interpolate.d.ts.map