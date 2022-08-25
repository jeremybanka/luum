"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHex = exports.hueToRelativeChannels = exports.hexToSpec = exports.hexToChannels = exports.channelsToSpec = void 0;
const channelsToSpec_1 = __importDefault(require("./channelsToSpec"));
exports.channelsToSpec = channelsToSpec_1.default;
const hexToChannels_1 = __importDefault(require("./hexToChannels"));
exports.hexToChannels = hexToChannels_1.default;
const hexToSpec_1 = __importDefault(require("./hexToSpec"));
exports.hexToSpec = hexToSpec_1.default;
const hueToRelativeChannels_1 = __importDefault(require("./hueToRelativeChannels"));
exports.hueToRelativeChannels = hueToRelativeChannels_1.default;
const normalizeHex_1 = __importDefault(require("./normalizeHex"));
exports.normalizeHex = normalizeHex_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW1wb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNFQUE2QztBQU8zQyx5QkFQSyx3QkFBYyxDQU9MO0FBTmhCLG9FQUEyQztBQU96Qyx3QkFQSyx1QkFBYSxDQU9MO0FBTmYsNERBQW1DO0FBT2pDLG9CQVBLLG1CQUFTLENBT0w7QUFOWCxvRkFBMkQ7QUFPekQsZ0NBUEssK0JBQXFCLENBT0w7QUFOdkIsa0VBQXlDO0FBT3ZDLHVCQVBLLHNCQUFZLENBT0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbm5lbHNUb1NwZWMgZnJvbSBcIi4vY2hhbm5lbHNUb1NwZWNcIlxuaW1wb3J0IGhleFRvQ2hhbm5lbHMgZnJvbSBcIi4vaGV4VG9DaGFubmVsc1wiXG5pbXBvcnQgaGV4VG9TcGVjIGZyb20gXCIuL2hleFRvU3BlY1wiXG5pbXBvcnQgaHVlVG9SZWxhdGl2ZUNoYW5uZWxzIGZyb20gXCIuL2h1ZVRvUmVsYXRpdmVDaGFubmVsc1wiXG5pbXBvcnQgbm9ybWFsaXplSGV4IGZyb20gXCIuL25vcm1hbGl6ZUhleFwiXG5cbmV4cG9ydCB7XG4gIGNoYW5uZWxzVG9TcGVjLFxuICBoZXhUb0NoYW5uZWxzLFxuICBoZXhUb1NwZWMsXG4gIGh1ZVRvUmVsYXRpdmVDaGFubmVscyxcbiAgbm9ybWFsaXplSGV4LFxufVxuIl19