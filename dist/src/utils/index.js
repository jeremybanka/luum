"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAround = exports.interpolate = exports.clamp = void 0;
const clamp_1 = __importDefault(require("./clamp"));
exports.clamp = clamp_1.default;
const interpolate_1 = __importDefault(require("./interpolate"));
exports.interpolate = interpolate_1.default;
const wrapAround_1 = __importDefault(require("./wrapAround"));
exports.wrapAround = wrapAround_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTJCO0FBSWxCLGdCQUpGLGVBQUssQ0FJRTtBQUhkLGdFQUF1QztBQUd2QixzQkFIVCxxQkFBVyxDQUdTO0FBRjNCLDhEQUFxQztBQUVSLHFCQUZ0QixvQkFBVSxDQUVzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFtcCBmcm9tIFwiLi9jbGFtcFwiXG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGVcIlxuaW1wb3J0IHdyYXBBcm91bmQgZnJvbSBcIi4vd3JhcEFyb3VuZFwiXG5cbmV4cG9ydCB7IGNsYW1wLCBpbnRlcnBvbGF0ZSwgd3JhcEFyb3VuZCB9XG4iXX0=