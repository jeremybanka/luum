"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const specToHexFixLimit_1 = __importDefault(require("./specToHexFixLimit"));
const specToHex = ({ hue, sat, lum, prefer }, filter) => {
    const { hex } = (0, specToHexFixLimit_1.default)({ hue, sat, lum, prefer }, filter);
    return hex;
};
exports.default = specToHex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY1RvSGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2V4cG9ydC9zcGVjVG9IZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSw0RUFBbUQ7QUFFbkQsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQVksRUFDbkMsTUFBZSxFQUNWLEVBQUU7SUFDUCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBQSwyQkFBaUIsRUFBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BFLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIEhleCwgTHV1bVNwZWMgfSBmcm9tIFwiflwiXG5cbmltcG9ydCBzcGVjVG9IZXhGaXhMaW1pdCBmcm9tIFwiLi9zcGVjVG9IZXhGaXhMaW1pdFwiXG5cbmNvbnN0IHNwZWNUb0hleCA9IChcbiAgeyBodWUsIHNhdCwgbHVtLCBwcmVmZXIgfTogTHV1bVNwZWMsXG4gIGZpbHRlcj86IEZpbHRlclxuKTogSGV4ID0+IHtcbiAgY29uc3QgeyBoZXggfSA9IHNwZWNUb0hleEZpeExpbWl0KHsgaHVlLCBzYXQsIGx1bSwgcHJlZmVyIH0sIGZpbHRlcilcbiAgcmV0dXJuIGhleFxufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVjVG9IZXhcbiJdfQ==