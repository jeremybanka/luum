export * from "./constants";
export * from "./constants/filters";
export * from "./constants/schemes";
export * from "./export";
export * from "./identify";
export * from "./import";
export * from "./scheme";
export * from "./solveFor";
export * from "./utils";
export declare type Degree = number;
export declare type OutOf255 = number;
export declare type Fraction = number;
export declare type Hex = string;
export declare type Range = [min: number, max: number];
export declare type ChannelObject = {
    R: number;
    G: number;
    B: number;
};
export declare type ChannelArray = [r: number, g: number, b: number];
export declare type FilterPoint = {
    hue: number;
    sat: number;
};
export declare type Filter = FilterPoint[];
export declare type HSL = {
    hue: number;
    sat: number;
    lum: number;
};
export interface LuumSpec extends HSL {
    prefer: `lum` | `sat`;
}
export declare type LuumFix = {
    sat: number;
    lum: number;
};
export declare type LuumLimit = {
    sat: Range;
    lum: Range;
};
//# sourceMappingURL=index.d.ts.map