"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
/*eslint-disable max-len */
/**
 * Gives us the relative values of the channels,
 * irrespective of the white light beneath them.
 * @param {number} hue - in degrees. Gets safely wrapped around first thing.
 *
 * Digital Red      0 ->   0
 *
 * Sunlight         50 ->  50
 *
 * Digital Yellow   60 ->  60
 *
 * Citron           70 ->  70
 *
 * Turquoise        510 -> 150
 *
 * @const {number} hueReduced - hue 0-359.9 is now a floating point 0-5.999.
 *
 * Digital Red    0 ->   0  ~  0.000
 *
 * Sunlight       50 -> 5/6  ~  0.833
 *
 * Digital Yellow 60 ->   1  ~  1.000
 *
 * Citron         70 -> 7/6  ~  1.167
 *
 * Turquoise      150 -> 5/2  ~  2.500
 *
 * @const {number} hueInteger - from 1-6. Tells us what color region we are in.
 *
 * Digital Red    0.000 -> 0
 *                : red-into-yellow region
 *
 * Sunlight       0.833 -> 0
 *                : red-into-yellow region
 *
 * Digital Yellow 1.000 -> 1
 *                : yellow-into-green region
 *
 * Citron         1.167 -> 1
 *                : yellow-into-green region
 *
 * Turquoise      2.500 -> 2
 *                : green-into-cyan region
 *
 * hueInteger is the 'whole number' piece of hueReduced.
 * FYI, the six color regions are bounded by red, yellow, green, cyan, blue, magenta.
 *
 * @const {number} hueDecimal - tells where we are in this region.
 *
 * Digital Red    0.000 -> 0.000
 *                : at the very beginning
 *
 * Sunlight       0.833 -> 0.833
 *                : near the end
 *
 * Digital Yellow 1.000 -> 0.000
 *                : at the very beginning
 *
 * Citron         1.167 -> 0.167
 *                : near the beginning
 *
 * Turquoise      2.500 -> 0.500
 *                : at the halfway point
 *
 * hueDecimal is the 'fraction' piece of hueReduced.
 * we are going to use this number to determine the value of the in-between channel.
 *
 * @const {number} x - used in primary-secondary transitions like Red into Yellow
 * @const {number} y - used in secondary-primary transitions like Yellow into Green
 * To understand the function of x and y, take the difference between
 *
 * Sunlight       (hue 50),
 * Citron         (hue 70),
 * Digital Yellow (hue 60),
 *
 * as an instructive case. These colors are all basically yellow.
 *
 * Sunlight is hue 50, which puts it near the end of the red-into-yellow region.
 *
 * This means its Red channel is full, and its Green channel is almost full.
 * The fullness of its Green channel is directly proportional to its
 * hueDecimal, the distance from the beginning of this region: 0.833
 *
 * Citron is hue 70, which puts it near the beginning of the yellow-into-green region.
 *
 * This means its Red channel is ALMOST FULL, and its Green channel is FULL.
 * So the fullness of its Red channel is INVERSELY proportional to its
 * hueDecimal, the distance from the beginning of this region: 1 - 0.167 = 0.833
 *
 * Digital Yellow is hue 60, which puts it at the very beginning of the yellow-into-green region.
 *
 * This means its Red Channel and its Green channel must both be full.
 * Like Citron, the fullness of Digital Yellow's Red channel is inversely proportional to its
 * hueDecimal, which is 0. Therefore Digital Yellow's Red channel has a fullness of 1.
 *
 * @returns array of values reflecting the spread between channels
 *
 * Digital Red    case 0:  [   R ===== 1       G = x = 0.000   B ===== 0      ]
 *
 * Sunlight       case 0:  [   R ===== 1       G = x = 0.833   B ===== 0      ]
 *
 * DigitalYellow  case 1:  [   R = y = 1.000   G ===== 1       B ===== 0      ]
 *
 * Citron         case 1:  [   R = y = 0.833   G ===== 1       B ===== 0      ]
 *
 * Turquoise      case 2:  [   R ===== 0       G ===== 1       B = x = 0.500  ]
 *
 * here we see detailed breakdowns of the function's final output for our running examples.
 */
/* eslint-enable max-len */
exports.default = (hue) => {
    hue = (0, utils_1.wrapAround)(hue, [0, 360]);
    const hueReduced = hue / 60;
    const hueInteger = Math.floor(hueReduced);
    const hueDecimal = hueReduced - hueInteger;
    const x = hueDecimal;
    const y = 1 - hueDecimal;
    switch (hueInteger) {
        /* eslint-disable prettier/prettier */
        case 0: return [1, x, 0];
        case 1: return [y, 1, 0];
        case 2: return [0, 1, x];
        case 3: return [0, y, 1];
        case 4: return [x, 0, 1];
        case 5: return [1, 0, y];
        default: throw new Error(`invalid hue served: ${hue}`);
        /* eslint-enable prettier/prettier */
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlVG9SZWxhdGl2ZUNoYW5uZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ltcG9ydC9odWVUb1JlbGF0aXZlQ2hhbm5lbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvQ0FBcUM7QUFFckMsMkJBQTJCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0R0c7QUFDSCwyQkFBMkI7QUFDM0Isa0JBQWUsQ0FBQyxHQUFXLEVBQTJDLEVBQUU7SUFDdEUsR0FBRyxHQUFHLElBQUEsa0JBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMvQixNQUFNLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDekMsTUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQTtJQUMxQyxNQUFNLENBQUMsR0FBRyxVQUFVLENBQUE7SUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtJQUN4QixRQUFRLFVBQVUsRUFBRTtRQUNsQixzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN0RCxxQ0FBcUM7S0FDdEM7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZ3JlZSwgRnJhY3Rpb24gfSBmcm9tIFwiflwiXG5cbmltcG9ydCB7IHdyYXBBcm91bmQgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vKmVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogR2l2ZXMgdXMgdGhlIHJlbGF0aXZlIHZhbHVlcyBvZiB0aGUgY2hhbm5lbHMsXG4gKiBpcnJlc3BlY3RpdmUgb2YgdGhlIHdoaXRlIGxpZ2h0IGJlbmVhdGggdGhlbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBodWUgLSBpbiBkZWdyZWVzLiBHZXRzIHNhZmVseSB3cmFwcGVkIGFyb3VuZCBmaXJzdCB0aGluZy5cbiAqXG4gKiBEaWdpdGFsIFJlZCAgICAgIDAgLT4gICAwXG4gKlxuICogU3VubGlnaHQgICAgICAgICA1MCAtPiAgNTBcbiAqXG4gKiBEaWdpdGFsIFllbGxvdyAgIDYwIC0+ICA2MFxuICpcbiAqIENpdHJvbiAgICAgICAgICAgNzAgLT4gIDcwXG4gKlxuICogVHVycXVvaXNlICAgICAgICA1MTAgLT4gMTUwXG4gKlxuICogQGNvbnN0IHtudW1iZXJ9IGh1ZVJlZHVjZWQgLSBodWUgMC0zNTkuOSBpcyBub3cgYSBmbG9hdGluZyBwb2ludCAwLTUuOTk5LlxuICpcbiAqIERpZ2l0YWwgUmVkICAgIDAgLT4gICAwICB+ICAwLjAwMFxuICpcbiAqIFN1bmxpZ2h0ICAgICAgIDUwIC0+IDUvNiAgfiAgMC44MzNcbiAqXG4gKiBEaWdpdGFsIFllbGxvdyA2MCAtPiAgIDEgIH4gIDEuMDAwXG4gKlxuICogQ2l0cm9uICAgICAgICAgNzAgLT4gNy82ICB+ICAxLjE2N1xuICpcbiAqIFR1cnF1b2lzZSAgICAgIDE1MCAtPiA1LzIgIH4gIDIuNTAwXG4gKlxuICogQGNvbnN0IHtudW1iZXJ9IGh1ZUludGVnZXIgLSBmcm9tIDEtNi4gVGVsbHMgdXMgd2hhdCBjb2xvciByZWdpb24gd2UgYXJlIGluLlxuICpcbiAqIERpZ2l0YWwgUmVkICAgIDAuMDAwIC0+IDBcbiAqICAgICAgICAgICAgICAgIDogcmVkLWludG8teWVsbG93IHJlZ2lvblxuICpcbiAqIFN1bmxpZ2h0ICAgICAgIDAuODMzIC0+IDBcbiAqICAgICAgICAgICAgICAgIDogcmVkLWludG8teWVsbG93IHJlZ2lvblxuICpcbiAqIERpZ2l0YWwgWWVsbG93IDEuMDAwIC0+IDFcbiAqICAgICAgICAgICAgICAgIDogeWVsbG93LWludG8tZ3JlZW4gcmVnaW9uXG4gKlxuICogQ2l0cm9uICAgICAgICAgMS4xNjcgLT4gMVxuICogICAgICAgICAgICAgICAgOiB5ZWxsb3ctaW50by1ncmVlbiByZWdpb25cbiAqXG4gKiBUdXJxdW9pc2UgICAgICAyLjUwMCAtPiAyXG4gKiAgICAgICAgICAgICAgICA6IGdyZWVuLWludG8tY3lhbiByZWdpb25cbiAqXG4gKiBodWVJbnRlZ2VyIGlzIHRoZSAnd2hvbGUgbnVtYmVyJyBwaWVjZSBvZiBodWVSZWR1Y2VkLlxuICogRllJLCB0aGUgc2l4IGNvbG9yIHJlZ2lvbnMgYXJlIGJvdW5kZWQgYnkgcmVkLCB5ZWxsb3csIGdyZWVuLCBjeWFuLCBibHVlLCBtYWdlbnRhLlxuICpcbiAqIEBjb25zdCB7bnVtYmVyfSBodWVEZWNpbWFsIC0gdGVsbHMgd2hlcmUgd2UgYXJlIGluIHRoaXMgcmVnaW9uLlxuICpcbiAqIERpZ2l0YWwgUmVkICAgIDAuMDAwIC0+IDAuMDAwXG4gKiAgICAgICAgICAgICAgICA6IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZ1xuICpcbiAqIFN1bmxpZ2h0ICAgICAgIDAuODMzIC0+IDAuODMzXG4gKiAgICAgICAgICAgICAgICA6IG5lYXIgdGhlIGVuZFxuICpcbiAqIERpZ2l0YWwgWWVsbG93IDEuMDAwIC0+IDAuMDAwXG4gKiAgICAgICAgICAgICAgICA6IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZ1xuICpcbiAqIENpdHJvbiAgICAgICAgIDEuMTY3IC0+IDAuMTY3XG4gKiAgICAgICAgICAgICAgICA6IG5lYXIgdGhlIGJlZ2lubmluZ1xuICpcbiAqIFR1cnF1b2lzZSAgICAgIDIuNTAwIC0+IDAuNTAwXG4gKiAgICAgICAgICAgICAgICA6IGF0IHRoZSBoYWxmd2F5IHBvaW50XG4gKlxuICogaHVlRGVjaW1hbCBpcyB0aGUgJ2ZyYWN0aW9uJyBwaWVjZSBvZiBodWVSZWR1Y2VkLlxuICogd2UgYXJlIGdvaW5nIHRvIHVzZSB0aGlzIG51bWJlciB0byBkZXRlcm1pbmUgdGhlIHZhbHVlIG9mIHRoZSBpbi1iZXR3ZWVuIGNoYW5uZWwuXG4gKlxuICogQGNvbnN0IHtudW1iZXJ9IHggLSB1c2VkIGluIHByaW1hcnktc2Vjb25kYXJ5IHRyYW5zaXRpb25zIGxpa2UgUmVkIGludG8gWWVsbG93XG4gKiBAY29uc3Qge251bWJlcn0geSAtIHVzZWQgaW4gc2Vjb25kYXJ5LXByaW1hcnkgdHJhbnNpdGlvbnMgbGlrZSBZZWxsb3cgaW50byBHcmVlblxuICogVG8gdW5kZXJzdGFuZCB0aGUgZnVuY3Rpb24gb2YgeCBhbmQgeSwgdGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKlxuICogU3VubGlnaHQgICAgICAgKGh1ZSA1MCksXG4gKiBDaXRyb24gICAgICAgICAoaHVlIDcwKSxcbiAqIERpZ2l0YWwgWWVsbG93IChodWUgNjApLFxuICpcbiAqIGFzIGFuIGluc3RydWN0aXZlIGNhc2UuIFRoZXNlIGNvbG9ycyBhcmUgYWxsIGJhc2ljYWxseSB5ZWxsb3cuXG4gKlxuICogU3VubGlnaHQgaXMgaHVlIDUwLCB3aGljaCBwdXRzIGl0IG5lYXIgdGhlIGVuZCBvZiB0aGUgcmVkLWludG8teWVsbG93IHJlZ2lvbi5cbiAqXG4gKiBUaGlzIG1lYW5zIGl0cyBSZWQgY2hhbm5lbCBpcyBmdWxsLCBhbmQgaXRzIEdyZWVuIGNoYW5uZWwgaXMgYWxtb3N0IGZ1bGwuXG4gKiBUaGUgZnVsbG5lc3Mgb2YgaXRzIEdyZWVuIGNoYW5uZWwgaXMgZGlyZWN0bHkgcHJvcG9ydGlvbmFsIHRvIGl0c1xuICogaHVlRGVjaW1hbCwgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGlzIHJlZ2lvbjogMC44MzNcbiAqXG4gKiBDaXRyb24gaXMgaHVlIDcwLCB3aGljaCBwdXRzIGl0IG5lYXIgdGhlIGJlZ2lubmluZyBvZiB0aGUgeWVsbG93LWludG8tZ3JlZW4gcmVnaW9uLlxuICpcbiAqIFRoaXMgbWVhbnMgaXRzIFJlZCBjaGFubmVsIGlzIEFMTU9TVCBGVUxMLCBhbmQgaXRzIEdyZWVuIGNoYW5uZWwgaXMgRlVMTC5cbiAqIFNvIHRoZSBmdWxsbmVzcyBvZiBpdHMgUmVkIGNoYW5uZWwgaXMgSU5WRVJTRUxZIHByb3BvcnRpb25hbCB0byBpdHNcbiAqIGh1ZURlY2ltYWwsIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhpcyByZWdpb246IDEgLSAwLjE2NyA9IDAuODMzXG4gKlxuICogRGlnaXRhbCBZZWxsb3cgaXMgaHVlIDYwLCB3aGljaCBwdXRzIGl0IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiB0aGUgeWVsbG93LWludG8tZ3JlZW4gcmVnaW9uLlxuICpcbiAqIFRoaXMgbWVhbnMgaXRzIFJlZCBDaGFubmVsIGFuZCBpdHMgR3JlZW4gY2hhbm5lbCBtdXN0IGJvdGggYmUgZnVsbC5cbiAqIExpa2UgQ2l0cm9uLCB0aGUgZnVsbG5lc3Mgb2YgRGlnaXRhbCBZZWxsb3cncyBSZWQgY2hhbm5lbCBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIGl0c1xuICogaHVlRGVjaW1hbCwgd2hpY2ggaXMgMC4gVGhlcmVmb3JlIERpZ2l0YWwgWWVsbG93J3MgUmVkIGNoYW5uZWwgaGFzIGEgZnVsbG5lc3Mgb2YgMS5cbiAqXG4gKiBAcmV0dXJucyBhcnJheSBvZiB2YWx1ZXMgcmVmbGVjdGluZyB0aGUgc3ByZWFkIGJldHdlZW4gY2hhbm5lbHNcbiAqXG4gKiBEaWdpdGFsIFJlZCAgICBjYXNlIDA6ICBbICAgUiA9PT09PSAxICAgICAgIEcgPSB4ID0gMC4wMDAgICBCID09PT09IDAgICAgICBdXG4gKlxuICogU3VubGlnaHQgICAgICAgY2FzZSAwOiAgWyAgIFIgPT09PT0gMSAgICAgICBHID0geCA9IDAuODMzICAgQiA9PT09PSAwICAgICAgXVxuICpcbiAqIERpZ2l0YWxZZWxsb3cgIGNhc2UgMTogIFsgICBSID0geSA9IDEuMDAwICAgRyA9PT09PSAxICAgICAgIEIgPT09PT0gMCAgICAgIF1cbiAqXG4gKiBDaXRyb24gICAgICAgICBjYXNlIDE6ICBbICAgUiA9IHkgPSAwLjgzMyAgIEcgPT09PT0gMSAgICAgICBCID09PT09IDAgICAgICBdXG4gKlxuICogVHVycXVvaXNlICAgICAgY2FzZSAyOiAgWyAgIFIgPT09PT0gMCAgICAgICBHID09PT09IDEgICAgICAgQiA9IHggPSAwLjUwMCAgXVxuICpcbiAqIGhlcmUgd2Ugc2VlIGRldGFpbGVkIGJyZWFrZG93bnMgb2YgdGhlIGZ1bmN0aW9uJ3MgZmluYWwgb3V0cHV0IGZvciBvdXIgcnVubmluZyBleGFtcGxlcy5cbiAqL1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5leHBvcnQgZGVmYXVsdCAoaHVlOiBEZWdyZWUpOiBbcjogRnJhY3Rpb24sIGc6IEZyYWN0aW9uLCBiOiBGcmFjdGlvbl0gPT4ge1xuICBodWUgPSB3cmFwQXJvdW5kKGh1ZSwgWzAsIDM2MF0pXG4gIGNvbnN0IGh1ZVJlZHVjZWQgPSBodWUgLyA2MFxuICBjb25zdCBodWVJbnRlZ2VyID0gTWF0aC5mbG9vcihodWVSZWR1Y2VkKVxuICBjb25zdCBodWVEZWNpbWFsID0gaHVlUmVkdWNlZCAtIGh1ZUludGVnZXJcbiAgY29uc3QgeCA9IGh1ZURlY2ltYWxcbiAgY29uc3QgeSA9IDEgLSBodWVEZWNpbWFsXG4gIHN3aXRjaCAoaHVlSW50ZWdlcikge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG4gICAgY2FzZSAwOiByZXR1cm4gWzEsIHgsIDBdXG4gICAgY2FzZSAxOiByZXR1cm4gW3ksIDEsIDBdXG4gICAgY2FzZSAyOiByZXR1cm4gWzAsIDEsIHhdXG4gICAgY2FzZSAzOiByZXR1cm4gWzAsIHksIDFdXG4gICAgY2FzZSA0OiByZXR1cm4gW3gsIDAsIDFdXG4gICAgY2FzZSA1OiByZXR1cm4gWzEsIDAsIHldXG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGh1ZSBzZXJ2ZWQ6ICR7aHVlfWApXG4gICAgLyogZXNsaW50LWVuYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuICB9XG59XG4iXX0=