"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificLumFromHue = exports.lumFromChannels = exports.satFromChannels = exports.hueFromChannels = exports.maxSatForHueInFilter = void 0;
const hueFromChannels_1 = __importDefault(require("./hueFromChannels"));
exports.hueFromChannels = hueFromChannels_1.default;
const lumFromChannels_1 = __importDefault(require("./lumFromChannels"));
exports.lumFromChannels = lumFromChannels_1.default;
const maxSatForHueInFilter_1 = __importDefault(require("./maxSatForHueInFilter"));
exports.maxSatForHueInFilter = maxSatForHueInFilter_1.default;
const satFromChannels_1 = __importDefault(require("./satFromChannels"));
exports.satFromChannels = satFromChannels_1.default;
const specificLumFromHue_1 = __importDefault(require("./specificLumFromHue"));
exports.specificLumFromHue = specificLumFromHue_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc29sdmVGb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0VBQStDO0FBUTdDLDBCQVJLLHlCQUFlLENBUUw7QUFQakIsd0VBQStDO0FBUzdDLDBCQVRLLHlCQUFlLENBU0w7QUFSakIsa0ZBQXlEO0FBS3ZELCtCQUxLLDhCQUFvQixDQUtMO0FBSnRCLHdFQUErQztBQU03QywwQkFOSyx5QkFBZSxDQU1MO0FBTGpCLDhFQUFxRDtBQU9uRCw2QkFQSyw0QkFBa0IsQ0FPTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodWVGcm9tQ2hhbm5lbHMgZnJvbSBcIi4vaHVlRnJvbUNoYW5uZWxzXCJcbmltcG9ydCBsdW1Gcm9tQ2hhbm5lbHMgZnJvbSBcIi4vbHVtRnJvbUNoYW5uZWxzXCJcbmltcG9ydCBtYXhTYXRGb3JIdWVJbkZpbHRlciBmcm9tIFwiLi9tYXhTYXRGb3JIdWVJbkZpbHRlclwiXG5pbXBvcnQgc2F0RnJvbUNoYW5uZWxzIGZyb20gXCIuL3NhdEZyb21DaGFubmVsc1wiXG5pbXBvcnQgc3BlY2lmaWNMdW1Gcm9tSHVlIGZyb20gXCIuL3NwZWNpZmljTHVtRnJvbUh1ZVwiXG5cbmV4cG9ydCB7XG4gIG1heFNhdEZvckh1ZUluRmlsdGVyLFxuICBodWVGcm9tQ2hhbm5lbHMsXG4gIHNhdEZyb21DaGFubmVscyxcbiAgbHVtRnJvbUNoYW5uZWxzLFxuICBzcGVjaWZpY0x1bUZyb21IdWUsXG59XG4iXX0=