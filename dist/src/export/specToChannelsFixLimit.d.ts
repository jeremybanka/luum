import type { ChannelObject, Filter, LuumSpec, Range } from "~";
declare type SpecToChannelsFixLimit = (spec: LuumSpec, filter?: Filter) => {
    channels: ChannelObject;
    fix: {
        sat: number;
        lum: number;
    };
    limit: {
        sat: Range;
        lum: Range;
    };
};
declare const specToChannelsFixLimit: SpecToChannelsFixLimit;
export default specToChannelsFixLimit;
//# sourceMappingURL=specToChannelsFixLimit.d.ts.map