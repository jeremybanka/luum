"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const hueToRelativeChannels_1 = __importDefault(require("../import/hueToRelativeChannels"));
exports.default = (hue) => {
    const [factorR, factorG, factorB] = (0, hueToRelativeChannels_1.default)(hue);
    const lumR = constants_1.CHANNEL_SPECIFIC_LUM.R * factorR;
    const lumG = constants_1.CHANNEL_SPECIFIC_LUM.G * factorG;
    const lumB = constants_1.CHANNEL_SPECIFIC_LUM.B * factorB;
    const specificLum = lumR + lumG + lumB;
    return specificLum;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNMdW1Gcm9tSHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NvbHZlRm9yL3NwZWNpZmljTHVtRnJvbUh1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFtRDtBQUNuRCw0RkFBbUU7QUFFbkUsa0JBQWUsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNyQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLCtCQUFxQixFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTlELE1BQU0sSUFBSSxHQUFHLGdDQUFvQixDQUFDLENBQUMsR0FBRyxPQUFPLENBQUE7SUFDN0MsTUFBTSxJQUFJLEdBQUcsZ0NBQW9CLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQTtJQUM3QyxNQUFNLElBQUksR0FBRyxnQ0FBb0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFBO0lBRTdDLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBRXRDLE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENIQU5ORUxfU1BFQ0lGSUNfTFVNIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQgaHVlVG9SZWxhdGl2ZUNoYW5uZWxzIGZyb20gXCIuLi9pbXBvcnQvaHVlVG9SZWxhdGl2ZUNoYW5uZWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgKGh1ZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgW2ZhY3RvclIsIGZhY3RvckcsIGZhY3RvckJdID0gaHVlVG9SZWxhdGl2ZUNoYW5uZWxzKGh1ZSlcblxuICBjb25zdCBsdW1SID0gQ0hBTk5FTF9TUEVDSUZJQ19MVU0uUiAqIGZhY3RvclJcbiAgY29uc3QgbHVtRyA9IENIQU5ORUxfU1BFQ0lGSUNfTFVNLkcgKiBmYWN0b3JHXG4gIGNvbnN0IGx1bUIgPSBDSEFOTkVMX1NQRUNJRklDX0xVTS5CICogZmFjdG9yQlxuXG4gIGNvbnN0IHNwZWNpZmljTHVtID0gbHVtUiArIGx1bUcgKyBsdW1CXG5cbiAgcmV0dXJuIHNwZWNpZmljTHVtXG59XG4iXX0=