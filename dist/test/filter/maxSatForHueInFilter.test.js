"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filters_1 = require("../../src/constants/filters");
const maxSatForHueInFilter_1 = __importDefault(require("../../src/solveFor/maxSatForHueInFilter"));
test(`simulateCMYK desaturates pure green 50%`, () => {
    const hue = 120;
    const filter = filters_1.CMYK;
    const maxSat = 127;
    expect((0, maxSatForHueInFilter_1.default)(hue, filter)).toEqual(maxSat);
});
test(`simulateCMYK desaturates pure green+360 50%`, () => {
    const hue = 480;
    const filter = filters_1.CMYK;
    const maxSat = 127;
    expect((0, maxSatForHueInFilter_1.default)(hue, filter)).toEqual(maxSat);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4U2F0Rm9ySHVlSW5GaWx0ZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvZmlsdGVyL21heFNhdEZvckh1ZUluRmlsdGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBa0Q7QUFDbEQsbUdBQTBFO0FBRTFFLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7SUFDbkQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFBO0lBQ2YsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFBO0lBQ25CLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNsQixNQUFNLENBQUMsSUFBQSw4QkFBb0IsRUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDM0QsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBRyxFQUFFO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNmLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQTtJQUNuQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDbEIsTUFBTSxDQUFDLElBQUEsOEJBQW9CLEVBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzNELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ01ZSyB9IGZyb20gXCIuLi8uLi9zcmMvY29uc3RhbnRzL2ZpbHRlcnNcIlxuaW1wb3J0IG1heFNhdEZvckh1ZUluRmlsdGVyIGZyb20gXCIuLi8uLi9zcmMvc29sdmVGb3IvbWF4U2F0Rm9ySHVlSW5GaWx0ZXJcIlxuXG50ZXN0KGBzaW11bGF0ZUNNWUsgZGVzYXR1cmF0ZXMgcHVyZSBncmVlbiA1MCVgLCAoKSA9PiB7XG4gIGNvbnN0IGh1ZSA9IDEyMFxuICBjb25zdCBmaWx0ZXIgPSBDTVlLXG4gIGNvbnN0IG1heFNhdCA9IDEyN1xuICBleHBlY3QobWF4U2F0Rm9ySHVlSW5GaWx0ZXIoaHVlLCBmaWx0ZXIpKS50b0VxdWFsKG1heFNhdClcbn0pXG5cbnRlc3QoYHNpbXVsYXRlQ01ZSyBkZXNhdHVyYXRlcyBwdXJlIGdyZWVuKzM2MCA1MCVgLCAoKSA9PiB7XG4gIGNvbnN0IGh1ZSA9IDQ4MFxuICBjb25zdCBmaWx0ZXIgPSBDTVlLXG4gIGNvbnN0IG1heFNhdCA9IDEyN1xuICBleHBlY3QobWF4U2F0Rm9ySHVlSW5GaWx0ZXIoaHVlLCBmaWx0ZXIpKS50b0VxdWFsKG1heFNhdClcbn0pXG4iXX0=