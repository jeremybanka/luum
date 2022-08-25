import type { Filter, Hex, LuumFix, LuumLimit, LuumSpec } from "~";
declare type SpecToHexFixLimit = (spec: LuumSpec, filter?: Filter) => {
    hex: Hex;
    fix: LuumFix;
    limit: LuumLimit;
};
declare const specToHexFixLimit: SpecToHexFixLimit;
export default specToHexFixLimit;
//# sourceMappingURL=specToHexFixLimit.d.ts.map