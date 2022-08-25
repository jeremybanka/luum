"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const import_1 = require("../src/scheme/import");
describe(`mixNewSwatch`, () => {
    it(`should return the same hex if no scheme is provided`, () => {
        const swatch = {
            wet: { hue: 0, sat: 255, lum: 0, prefer: `sat` },
            dry: `#ff0000`,
        };
        const mix = [
            [`split`, 1],
            [`prefer`, `lum`],
            [`contrast`, 1],
        ];
        const newSwatch = (0, import_1.mixNewSwatch)(swatch.wet, mix);
        // console.log(newSwatch)
        expect(newSwatch.wet.hue).toBeCloseTo(150);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4TmV3U3dhdGNoLnRlc3Qtb2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9taXhOZXdTd2F0Y2gudGVzdC1vbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxpREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtRQUM3RCxNQUFNLE1BQU0sR0FBVztZQUNyQixHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ2hELEdBQUcsRUFBRSxTQUFTO1NBQ2YsQ0FBQTtRQUNELE1BQU0sR0FBRyxHQUFRO1lBQ2YsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNoQixDQUFBO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBQSxxQkFBWSxFQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDL0MseUJBQXlCO1FBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBNaXggfSBmcm9tIFwifi9taXhlcnNcIlxuaW1wb3J0IHR5cGUgeyBTd2F0Y2ggfSBmcm9tIFwifi9zY2hlbWVcIlxuXG5pbXBvcnQgeyBtaXhOZXdTd2F0Y2ggfSBmcm9tIFwiLi4vc3JjL3NjaGVtZS9pbXBvcnRcIlxuXG5kZXNjcmliZShgbWl4TmV3U3dhdGNoYCwgKCkgPT4ge1xuICBpdChgc2hvdWxkIHJldHVybiB0aGUgc2FtZSBoZXggaWYgbm8gc2NoZW1lIGlzIHByb3ZpZGVkYCwgKCkgPT4ge1xuICAgIGNvbnN0IHN3YXRjaDogU3dhdGNoID0ge1xuICAgICAgd2V0OiB7IGh1ZTogMCwgc2F0OiAyNTUsIGx1bTogMCwgcHJlZmVyOiBgc2F0YCB9LFxuICAgICAgZHJ5OiBgI2ZmMDAwMGAsXG4gICAgfVxuICAgIGNvbnN0IG1peDogTWl4ID0gW1xuICAgICAgW2BzcGxpdGAsIDFdLFxuICAgICAgW2BwcmVmZXJgLCBgbHVtYF0sXG4gICAgICBbYGNvbnRyYXN0YCwgMV0sXG4gICAgXVxuICAgIGNvbnN0IG5ld1N3YXRjaCA9IG1peE5ld1N3YXRjaChzd2F0Y2gud2V0LCBtaXgpXG4gICAgLy8gY29uc29sZS5sb2cobmV3U3dhdGNoKVxuICAgIGV4cGVjdChuZXdTd2F0Y2gud2V0Lmh1ZSkudG9CZUNsb3NlVG8oMTUwKVxuICB9KVxufSlcbiJdfQ==