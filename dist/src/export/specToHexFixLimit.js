"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channelsToHex_1 = __importDefault(require("./channelsToHex"));
const specToChannelsFixLimit_1 = __importDefault(require("./specToChannelsFixLimit"));
const specToHexFixLimit = ({ hue, sat, lum, prefer }, filter) => {
    const { channels, fix, limit } = (0, specToChannelsFixLimit_1.default)({
        hue,
        sat,
        lum,
        prefer,
    }, filter);
    const { R, G, B } = channels;
    const hex = (0, channelsToHex_1.default)({ R, G, B });
    // console.log('--- newHex', hex)
    return { hex, fix, limit };
};
exports.default = specToHexFixLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY1RvSGV4Rml4TGltaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXhwb3J0L3NwZWNUb0hleEZpeExpbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsb0VBQTJDO0FBQzNDLHNGQUFxRDtBQVdyRCxNQUFNLGlCQUFpQixHQUFzQixDQUMzQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUN6QixNQUFNLEVBQ04sRUFBRTtJQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsZ0NBQWMsRUFDN0M7UUFDRSxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxNQUFNO0tBQ1AsRUFDRCxNQUFNLENBQ1AsQ0FBQTtJQUNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFBLHVCQUFhLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFdEMsaUNBQWlDO0lBRWpDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO0FBQzVCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGlCQUFpQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIEhleCwgTHV1bUZpeCwgTHV1bUxpbWl0LCBMdXVtU3BlYyB9IGZyb20gXCJ+XCJcblxuaW1wb3J0IGNoYW5uZWxzVG9IZXggZnJvbSBcIi4vY2hhbm5lbHNUb0hleFwiXG5pbXBvcnQgc3BlY1RvQ2hhbm5lbHMgZnJvbSBcIi4vc3BlY1RvQ2hhbm5lbHNGaXhMaW1pdFwiXG5cbnR5cGUgU3BlY1RvSGV4Rml4TGltaXQgPSAoXG4gIHNwZWM6IEx1dW1TcGVjLFxuICBmaWx0ZXI/OiBGaWx0ZXJcbikgPT4ge1xuICBoZXg6IEhleFxuICBmaXg6IEx1dW1GaXhcbiAgbGltaXQ6IEx1dW1MaW1pdFxufVxuXG5jb25zdCBzcGVjVG9IZXhGaXhMaW1pdDogU3BlY1RvSGV4Rml4TGltaXQgPSAoXG4gIHsgaHVlLCBzYXQsIGx1bSwgcHJlZmVyIH0sXG4gIGZpbHRlclxuKSA9PiB7XG4gIGNvbnN0IHsgY2hhbm5lbHMsIGZpeCwgbGltaXQgfSA9IHNwZWNUb0NoYW5uZWxzKFxuICAgIHtcbiAgICAgIGh1ZSxcbiAgICAgIHNhdCxcbiAgICAgIGx1bSxcbiAgICAgIHByZWZlcixcbiAgICB9LFxuICAgIGZpbHRlclxuICApXG4gIGNvbnN0IHsgUiwgRywgQiB9ID0gY2hhbm5lbHNcbiAgY29uc3QgaGV4ID0gY2hhbm5lbHNUb0hleCh7IFIsIEcsIEIgfSlcblxuICAvLyBjb25zb2xlLmxvZygnLS0tIG5ld0hleCcsIGhleClcblxuICByZXR1cm4geyBoZXgsIGZpeCwgbGltaXQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVjVG9IZXhGaXhMaW1pdFxuIl19