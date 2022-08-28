"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (hue, filter) => {
    // 430
    let maxSat = 255;
    const hueWrapped = (0, utils_1.wrapAround)(hue, [0, 360]); // 70
    for (let a = -1, b = 0; b < filter.length; a++, b++) {
        a = (0, utils_1.wrapAround)(a, [0, filter.length]);
        // console.log('||| a =', a, 'b =', b)
        const hueDoubleWrapped = a > b ? (0, utils_1.wrapAround)(hueWrapped, [-180, 180]) : undefined; // undef
        const tuningPointA = filter[a];
        const tuningPointB = filter[b];
        const hueA = a > b ? (0, utils_1.wrapAround)(tuningPointA.hue, [-180, 180]) : tuningPointA.hue;
        const hueB = tuningPointB.hue;
        if ((hueDoubleWrapped || hueWrapped) >= hueA &&
            (hueDoubleWrapped || hueWrapped) < hueB) {
            // console.log(
            //   '||| hue', hue, 'between', tuningPointA.hue, 'and', tuningPointB.hue
            // )
            let $ = hueDoubleWrapped || hueWrapped; // 70
            $ -= hueA; // 70 - 50 = 20 //
            $ /= hueB - hueA; // 20 / (120 - 50) = 2/7
            $ *= tuningPointB.sat - tuningPointA.sat; // -128 * 2 / 7 = -256 / 7 ~= -37
            $ += tuningPointA.sat;
            Math.round($);
            // console.log('||| _', _)
            maxSat = $;
        }
    }
    // console.log('--- maxSat', maxSat)
    return maxSat;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4U2F0Rm9ySHVlSW5GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc29sdmVGb3IvbWF4U2F0Rm9ySHVlSW5GaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvQ0FBcUM7QUFFckMsa0JBQWUsQ0FBQyxHQUFXLEVBQUUsTUFBYyxFQUFVLEVBQUU7SUFDckQsTUFBTTtJQUNOLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNoQixNQUFNLFVBQVUsR0FBRyxJQUFBLGtCQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxLQUFLO0lBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuRCxDQUFDLEdBQUcsSUFBQSxrQkFBVSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNyQyxzQ0FBc0M7UUFDdEMsTUFBTSxnQkFBZ0IsR0FDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBQSxrQkFBVSxFQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQSxDQUFDLFFBQVE7UUFDbEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM5QixNQUFNLElBQUksR0FDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFBLGtCQUFVLEVBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUE7UUFDdEUsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQTtRQUM3QixJQUNFLENBQUMsZ0JBQWdCLElBQUksVUFBVSxDQUFDLElBQUksSUFBSTtZQUN4QyxDQUFDLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksRUFDdkM7WUFDQSxlQUFlO1lBQ2YseUVBQXlFO1lBQ3pFLElBQUk7WUFDSixJQUFJLENBQUMsR0FBRyxnQkFBZ0IsSUFBSSxVQUFVLENBQUEsQ0FBQyxLQUFLO1lBQzVDLENBQUMsSUFBSSxJQUFJLENBQUEsQ0FBQyxrQkFBa0I7WUFDNUIsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUEsQ0FBQyx3QkFBd0I7WUFDekMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQSxDQUFDLGlDQUFpQztZQUMxRSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2IsMEJBQTBCO1lBQzFCLE1BQU0sR0FBRyxDQUFDLENBQUE7U0FDWDtLQUNGO0lBQ0Qsb0NBQW9DO0lBQ3BDLE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIERlZ3JlZSB9IGZyb20gXCJ+XCJcblxuaW1wb3J0IHsgd3JhcEFyb3VuZCB9IGZyb20gXCIuLi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IChodWU6IERlZ3JlZSwgZmlsdGVyOiBGaWx0ZXIpOiBudW1iZXIgPT4ge1xuICAvLyA0MzBcbiAgbGV0IG1heFNhdCA9IDI1NVxuICBjb25zdCBodWVXcmFwcGVkID0gd3JhcEFyb3VuZChodWUsIFswLCAzNjBdKSAvLyA3MFxuICBmb3IgKGxldCBhID0gLTEsIGIgPSAwOyBiIDwgZmlsdGVyLmxlbmd0aDsgYSsrLCBiKyspIHtcbiAgICBhID0gd3JhcEFyb3VuZChhLCBbMCwgZmlsdGVyLmxlbmd0aF0pXG4gICAgLy8gY29uc29sZS5sb2coJ3x8fCBhID0nLCBhLCAnYiA9JywgYilcbiAgICBjb25zdCBodWVEb3VibGVXcmFwcGVkID1cbiAgICAgIGEgPiBiID8gd3JhcEFyb3VuZChodWVXcmFwcGVkLCBbLTE4MCwgMTgwXSkgOiB1bmRlZmluZWQgLy8gdW5kZWZcbiAgICBjb25zdCB0dW5pbmdQb2ludEEgPSBmaWx0ZXJbYV1cbiAgICBjb25zdCB0dW5pbmdQb2ludEIgPSBmaWx0ZXJbYl1cbiAgICBjb25zdCBodWVBID1cbiAgICAgIGEgPiBiID8gd3JhcEFyb3VuZCh0dW5pbmdQb2ludEEuaHVlLCBbLTE4MCwgMTgwXSkgOiB0dW5pbmdQb2ludEEuaHVlXG4gICAgY29uc3QgaHVlQiA9IHR1bmluZ1BvaW50Qi5odWVcbiAgICBpZiAoXG4gICAgICAoaHVlRG91YmxlV3JhcHBlZCB8fCBodWVXcmFwcGVkKSA+PSBodWVBICYmXG4gICAgICAoaHVlRG91YmxlV3JhcHBlZCB8fCBodWVXcmFwcGVkKSA8IGh1ZUJcbiAgICApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICAnfHx8IGh1ZScsIGh1ZSwgJ2JldHdlZW4nLCB0dW5pbmdQb2ludEEuaHVlLCAnYW5kJywgdHVuaW5nUG9pbnRCLmh1ZVxuICAgICAgLy8gKVxuICAgICAgbGV0ICQgPSBodWVEb3VibGVXcmFwcGVkIHx8IGh1ZVdyYXBwZWQgLy8gNzBcbiAgICAgICQgLT0gaHVlQSAvLyA3MCAtIDUwID0gMjAgLy9cbiAgICAgICQgLz0gaHVlQiAtIGh1ZUEgLy8gMjAgLyAoMTIwIC0gNTApID0gMi83XG4gICAgICAkICo9IHR1bmluZ1BvaW50Qi5zYXQgLSB0dW5pbmdQb2ludEEuc2F0IC8vIC0xMjggKiAyIC8gNyA9IC0yNTYgLyA3IH49IC0zN1xuICAgICAgJCArPSB0dW5pbmdQb2ludEEuc2F0XG4gICAgICBNYXRoLnJvdW5kKCQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnfHx8IF8nLCBfKVxuICAgICAgbWF4U2F0ID0gJFxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZygnLS0tIG1heFNhdCcsIG1heFNhdClcbiAgcmV0dXJuIG1heFNhdFxufVxuIl19