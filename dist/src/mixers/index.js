"use strict";
// import type { LuumSpec } from "~"
// import { specToHexFixLimit } from "~/export"
// import { hexToSpec } from "~/import"
// import contrast from "./contrast"
// import { setHue, split, tetra, trine } from "./hue"
// import { setLum, shade, tint } from "./lum"
// import { setSat, amp, mute } from "./sat"
// export type MixerArgs = {
//   hex: string
//   spec: LuumSpec
//   hue: number
//   sat: number
//   lum: number
//   prefer: `lum` | `sat`
//   fix: `lum` | `sat`
//   contrast: 0 | 1 | 2
//   amp: number
//   mute: number
//   tint: number
//   shade: number
//   split: number
//   tetra: number
//   trine: number
//   //cool: number
//   //warm: number
// }
// export type MixerName = keyof MixerArgs
// export type MixTuple<N extends MixerName> = [N, MixerArgs[N]]
// export type Mix = MixTuple<keyof MixerArgs>[]
// export type SwatchRemixer = (swatch: Swatch) => Swatch
// export type Mixer<V = never> = (color: LuumSpec, value: V) => LuumSpec
// const mixers: {
//   [Name in MixerName]: Mixer<MixerArgs[Name]>
// } = {
//   hex: (color, value) => ({ ...color, ...hexToSpec(value) }),
//   spec: (_, value) => ({ ...value }),
//   hue: setHue,
//   sat: setSat,
//   lum: setLum,
//   fix: (color, prefer) => ({
//     ...color,
//     prefer,
//     ...specToHexFixLimit({ ...color, prefer }).fix,
//   }),
//   prefer: (color, prefer) => ({ ...color, prefer }),
//   amp,
//   contrast,
//   mute,
//   tint,
//   shade,
//   split,
//   tetra,
//   trine,
// }
// export default mixers
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWl4ZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBb0M7QUFFcEMsK0NBQStDO0FBQy9DLHVDQUF1QztBQUV2QyxvQ0FBb0M7QUFDcEMsc0RBQXNEO0FBQ3RELDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFFNUMsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsMEJBQTBCO0FBQzFCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLDBDQUEwQztBQUUxQyxnRUFBZ0U7QUFFaEUsZ0RBQWdEO0FBRWhELHlEQUF5RDtBQUV6RCx5RUFBeUU7QUFFekUsa0JBQWtCO0FBQ2xCLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1IsZ0VBQWdFO0FBQ2hFLHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxzREFBc0Q7QUFDdEQsUUFBUTtBQUNSLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1QsY0FBYztBQUNkLFVBQVU7QUFDVixVQUFVO0FBQ1YsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLElBQUk7QUFFSix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdHlwZSB7IEx1dW1TcGVjIH0gZnJvbSBcIn5cIlxuXG4vLyBpbXBvcnQgeyBzcGVjVG9IZXhGaXhMaW1pdCB9IGZyb20gXCJ+L2V4cG9ydFwiXG4vLyBpbXBvcnQgeyBoZXhUb1NwZWMgfSBmcm9tIFwifi9pbXBvcnRcIlxuXG4vLyBpbXBvcnQgY29udHJhc3QgZnJvbSBcIi4vY29udHJhc3RcIlxuLy8gaW1wb3J0IHsgc2V0SHVlLCBzcGxpdCwgdGV0cmEsIHRyaW5lIH0gZnJvbSBcIi4vaHVlXCJcbi8vIGltcG9ydCB7IHNldEx1bSwgc2hhZGUsIHRpbnQgfSBmcm9tIFwiLi9sdW1cIlxuLy8gaW1wb3J0IHsgc2V0U2F0LCBhbXAsIG11dGUgfSBmcm9tIFwiLi9zYXRcIlxuXG4vLyBleHBvcnQgdHlwZSBNaXhlckFyZ3MgPSB7XG4vLyAgIGhleDogc3RyaW5nXG4vLyAgIHNwZWM6IEx1dW1TcGVjXG4vLyAgIGh1ZTogbnVtYmVyXG4vLyAgIHNhdDogbnVtYmVyXG4vLyAgIGx1bTogbnVtYmVyXG4vLyAgIHByZWZlcjogYGx1bWAgfCBgc2F0YFxuLy8gICBmaXg6IGBsdW1gIHwgYHNhdGBcbi8vICAgY29udHJhc3Q6IDAgfCAxIHwgMlxuLy8gICBhbXA6IG51bWJlclxuLy8gICBtdXRlOiBudW1iZXJcbi8vICAgdGludDogbnVtYmVyXG4vLyAgIHNoYWRlOiBudW1iZXJcbi8vICAgc3BsaXQ6IG51bWJlclxuLy8gICB0ZXRyYTogbnVtYmVyXG4vLyAgIHRyaW5lOiBudW1iZXJcbi8vICAgLy9jb29sOiBudW1iZXJcbi8vICAgLy93YXJtOiBudW1iZXJcbi8vIH1cblxuLy8gZXhwb3J0IHR5cGUgTWl4ZXJOYW1lID0ga2V5b2YgTWl4ZXJBcmdzXG5cbi8vIGV4cG9ydCB0eXBlIE1peFR1cGxlPE4gZXh0ZW5kcyBNaXhlck5hbWU+ID0gW04sIE1peGVyQXJnc1tOXV1cblxuLy8gZXhwb3J0IHR5cGUgTWl4ID0gTWl4VHVwbGU8a2V5b2YgTWl4ZXJBcmdzPltdXG5cbi8vIGV4cG9ydCB0eXBlIFN3YXRjaFJlbWl4ZXIgPSAoc3dhdGNoOiBTd2F0Y2gpID0+IFN3YXRjaFxuXG4vLyBleHBvcnQgdHlwZSBNaXhlcjxWID0gbmV2ZXI+ID0gKGNvbG9yOiBMdXVtU3BlYywgdmFsdWU6IFYpID0+IEx1dW1TcGVjXG5cbi8vIGNvbnN0IG1peGVyczoge1xuLy8gICBbTmFtZSBpbiBNaXhlck5hbWVdOiBNaXhlcjxNaXhlckFyZ3NbTmFtZV0+XG4vLyB9ID0ge1xuLy8gICBoZXg6IChjb2xvciwgdmFsdWUpID0+ICh7IC4uLmNvbG9yLCAuLi5oZXhUb1NwZWModmFsdWUpIH0pLFxuLy8gICBzcGVjOiAoXywgdmFsdWUpID0+ICh7IC4uLnZhbHVlIH0pLFxuLy8gICBodWU6IHNldEh1ZSxcbi8vICAgc2F0OiBzZXRTYXQsXG4vLyAgIGx1bTogc2V0THVtLFxuLy8gICBmaXg6IChjb2xvciwgcHJlZmVyKSA9PiAoe1xuLy8gICAgIC4uLmNvbG9yLFxuLy8gICAgIHByZWZlcixcbi8vICAgICAuLi5zcGVjVG9IZXhGaXhMaW1pdCh7IC4uLmNvbG9yLCBwcmVmZXIgfSkuZml4LFxuLy8gICB9KSxcbi8vICAgcHJlZmVyOiAoY29sb3IsIHByZWZlcikgPT4gKHsgLi4uY29sb3IsIHByZWZlciB9KSxcbi8vICAgYW1wLFxuLy8gICBjb250cmFzdCxcbi8vICAgbXV0ZSxcbi8vICAgdGludCxcbi8vICAgc2hhZGUsXG4vLyAgIHNwbGl0LFxuLy8gICB0ZXRyYSxcbi8vICAgdHJpbmUsXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IG1peGVyc1xuIl19