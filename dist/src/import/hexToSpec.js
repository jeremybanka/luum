"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channelsToSpec_1 = __importDefault(require("./channelsToSpec"));
const hexToChannels_1 = __importDefault(require("./hexToChannels"));
const hexToSpec = (hex) => {
    const { R, G, B } = (0, hexToChannels_1.default)(hex);
    /*
    console.log('+++ input hex', hex)
    console.log('||| R', R)
    console.log('||| G', G)
    console.log('||| B', B)
    */
    const { hue, sat, lum } = (0, channelsToSpec_1.default)({ R, G, B });
    return { hue, sat, lum };
};
exports.default = hexToSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4VG9TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ltcG9ydC9oZXhUb1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxzRUFBNkM7QUFDN0Msb0VBQTJDO0FBRTNDLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBVyxFQUFPLEVBQUU7SUFDckMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSx1QkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RDOzs7OztNQUtFO0lBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBQSx3QkFBYyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBO0FBQzFCLENBQUMsQ0FBQTtBQUVELGtCQUFlLFNBQVMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSFNMIH0gZnJvbSBcIn5cIlxuXG5pbXBvcnQgY2hhbm5lbHNUb1NwZWMgZnJvbSBcIi4vY2hhbm5lbHNUb1NwZWNcIlxuaW1wb3J0IGhleFRvQ2hhbm5lbHMgZnJvbSBcIi4vaGV4VG9DaGFubmVsc1wiXG5cbmNvbnN0IGhleFRvU3BlYyA9IChoZXg6IHN0cmluZyk6IEhTTCA9PiB7XG4gIGNvbnN0IHsgUiwgRywgQiB9ID0gaGV4VG9DaGFubmVscyhoZXgpXG4gIC8qXG4gIGNvbnNvbGUubG9nKCcrKysgaW5wdXQgaGV4JywgaGV4KVxuICBjb25zb2xlLmxvZygnfHx8IFInLCBSKVxuICBjb25zb2xlLmxvZygnfHx8IEcnLCBHKVxuICBjb25zb2xlLmxvZygnfHx8IEInLCBCKVxuICAqL1xuICBjb25zdCB7IGh1ZSwgc2F0LCBsdW0gfSA9IGNoYW5uZWxzVG9TcGVjKHsgUiwgRywgQiB9KVxuICByZXR1cm4geyBodWUsIHNhdCwgbHVtIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGV4VG9TcGVjXG4iXX0=