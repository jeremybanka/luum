"use strict";
// import type { Filter, LuumSpec } from "~"
// import { unfiltered } from "~/constants/filters"
// import { defaultSpec } from "~/constants/spec"
// import { specToHex } from "~/export"
// import type { Mix, Mixer } from "~/mixers"
// import mixers from "~/mixers"
// import mapObject from "~/utils/mapObject"
// import type {
//   Swatch,
//   InteractivePalette,
//   InteractiveScheme,
//   InteractiveSwatch,
//   InteractiveMix,
//   Scheme,
//   NonInteractiveScheme,
//   NonInteractivePalette,
// } from "."
// export const isInteractiveSwatch = (
//   swatch: InteractiveSwatch | Swatch | undefined
// ): swatch is InteractiveSwatch => {
//   if (swatch === undefined) return false
//   return Boolean((swatch as InteractiveSwatch).base)
// }
// type MixNewSpec = (spec: LuumSpec, mix: Mix) => LuumSpec
// export const mixNewSpec: MixNewSpec = (spec, mix) =>
//   mix.reduce<LuumSpec>((currentColor, [name, value]) => {
//     const mixer = mixers[name] as Mixer<typeof value>
//     return mixer(currentColor, value)
//   }, spec)
// type MixNewSwatch = (spec: LuumSpec, mix: Mix, filter?: Filter) => Swatch
// export const mixNewSwatch: MixNewSwatch = (spec, mix, filter) => {
//   const wet = mixNewSpec(spec, mix)
//   const dry = specToHex(wet, filter)
//   return { wet, dry }
// }
// type MixPaletteStatic = <S extends NonInteractiveScheme>(
//   scheme: S,
//   parent?: {
//     filter: Filter
//     attributes: Record<string, InteractiveSwatch> | Record<string, Swatch>
//   }
// ) => NonInteractivePalette<S>
// // export const mixPaletteStatic: MixPaletteStatic = (scheme, parent) => {
// //   const filter = scheme.filter || parent?.filter || unfiltered
// //   const rootSpec = mixNewSpec(defaultSpec, scheme.root || [])
// //   const paletteAttributes =
// //   mapObject(scheme.attributes, (mix: Mix, key) => {
// //     const parentAttribute = parent?.attributes[key]
// //     const startingPoint = isInteractiveSwatch(parentAttribute)
// //       ? parentAttribute.base.wet
// //       : parentAttribute?.wet || rootSpec
// //     console.log(parentAttribute)
// //     console.log(startingPoint)
// //     return mixNewSwatch(startingPoint, mix, filter)
// //   }) as Record<keyof typeof scheme.attributes, Swatch>
// //   const palette: NonInteractivePalette<typeof scheme> = {
// //     attributes: paletteAttributes as NonInteractivePalette<
// //       typeof scheme
// //     >[`attributes`],
// //   }
// //   if (scheme.children) {
// //     palette.children = mapObject(scheme.children, (child: Scheme) =>
// //       mixPalette(child, { filter, attributes: paletteAttributes })
// //     ) as NonInteractivePalette<typeof scheme>[`children`]
// //   }
// //   return palette
// // }
// // type MixPaletteInteractive = <S extends InteractiveScheme>(
// //   scheme: S,
// //   parent?: {
// //     filter: Filter
// //     attributes: Record<string, InteractiveSwatch> | Record<string, Swatch>
// //   }
// // ) => InteractivePalette<S>
// // export const mixPaletteInteractive: MixPaletteInteractive
// // = (scheme, parent) => {
// //   const filter = scheme.filter || parent?.filter || unfiltered
// //   const rootSpec = mixNewSpec(defaultSpec, scheme.root || [])
// //   const baseSwatches = mapObject(
// //     scheme.attributes,
// //     (attribute: InteractiveMix, key) => {
// //       const parentAttribute = parent?.attributes[key]
// //       const startingPoint = isInteractiveSwatch(parentAttribute)
// //         ? parentAttribute.base.wet
// //         : parentAttribute?.wet || rootSpec
// //       return mixNewSwatch(startingPoint, attribute.base, filter)
// //     }
// //   ) as Record<keyof typeof scheme.attributes, Swatch>
// //   const paletteAttributes = mapObject(
// //     scheme.attributes,
// //     (attribute: InteractiveMix, attributeKey) =>
// //       mapObject(attribute, (state: Mix, stateKey) => {
// //         if (stateKey === `base`) {
// //           return baseSwatches[attributeKey]
// //         }
// //         return mixNewSwatch(baseSwatches[attributeKey].wet, state, filter)
// //       })
// //   ) as InteractivePalette<typeof scheme>[`attributes`]
// //   const palette: InteractivePalette<typeof scheme> = {
// //     attributes: paletteAttributes,
// //   }
// //   if (scheme.children) {
// //     palette.children = mapObject(scheme.children, (child: Scheme) =>
// //       mixPalette(child, { filter, attributes: paletteAttributes })
// //     ) as InteractivePalette<typeof scheme>[`children`]
// //   }
// //   return palette
// // }
// // export const isInteractiveScheme =
// // (scheme: Scheme): scheme is InteractiveScheme =>
// //   !Array.isArray(Object.values(scheme.attributes)[0])
// // type MixPalette = <S extends Scheme>(
// //   scheme: S,
// //   parent?: {
// //     filter: Filter
// //     attributes: Record<string, InteractiveSwatch> | Record<string, Swatch>
// //   }
// //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // ) => InteractivePalette<any> | NonInteractivePalette<any>
// // export const mixPalette: MixPalette = (scheme, parent) =>
// //   isInteractiveScheme(scheme)
// //     ? mixPaletteInteractive(scheme, parent)
// //     : mixPaletteStatic(scheme, parent)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtZS9pbXBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUE0QztBQUU1QyxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0MsZ0NBQWdDO0FBQ2hDLDRDQUE0QztBQUU1QyxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixhQUFhO0FBRWIsdUNBQXVDO0FBQ3ZDLG1EQUFtRDtBQUNuRCxzQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLHVEQUF1RDtBQUN2RCxJQUFJO0FBRUosMkRBQTJEO0FBRTNELHVEQUF1RDtBQUN2RCw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBQ3hELHdDQUF3QztBQUN4QyxhQUFhO0FBRWIsNEVBQTRFO0FBRTVFLHFFQUFxRTtBQUNyRSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDLHdCQUF3QjtBQUN4QixJQUFJO0FBRUosNERBQTREO0FBQzVELGVBQWU7QUFDZixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCLDZFQUE2RTtBQUM3RSxNQUFNO0FBQ04sZ0NBQWdDO0FBRWhDLDZFQUE2RTtBQUM3RSxvRUFBb0U7QUFDcEUsbUVBQW1FO0FBRW5FLGlDQUFpQztBQUNqQyx5REFBeUQ7QUFDekQseURBQXlEO0FBQ3pELG9FQUFvRTtBQUNwRSxzQ0FBc0M7QUFDdEMsOENBQThDO0FBRTlDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMseURBQXlEO0FBQ3pELDREQUE0RDtBQUU1RCwrREFBK0Q7QUFDL0QsaUVBQWlFO0FBQ2pFLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsU0FBUztBQUVULDhCQUE4QjtBQUM5QiwwRUFBMEU7QUFDMUUsd0VBQXdFO0FBQ3hFLCtEQUErRDtBQUMvRCxTQUFTO0FBRVQsc0JBQXNCO0FBQ3RCLE9BQU87QUFFUCxpRUFBaUU7QUFDakUsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsZ0ZBQWdGO0FBQ2hGLFNBQVM7QUFDVCxnQ0FBZ0M7QUFFaEMsK0RBQStEO0FBQy9ELDZCQUE2QjtBQUM3QixvRUFBb0U7QUFDcEUsbUVBQW1FO0FBRW5FLHVDQUF1QztBQUN2Qyw0QkFBNEI7QUFDNUIsK0NBQStDO0FBQy9DLDJEQUEyRDtBQUMzRCxzRUFBc0U7QUFDdEUsd0NBQXdDO0FBQ3hDLGdEQUFnRDtBQUNoRCxzRUFBc0U7QUFDdEUsV0FBVztBQUNYLDJEQUEyRDtBQUUzRCw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLHNEQUFzRDtBQUN0RCw0REFBNEQ7QUFDNUQsd0NBQXdDO0FBQ3hDLGlEQUFpRDtBQUNqRCxlQUFlO0FBQ2YsZ0ZBQWdGO0FBQ2hGLGNBQWM7QUFDZCw0REFBNEQ7QUFFNUQsNERBQTREO0FBQzVELHdDQUF3QztBQUN4QyxTQUFTO0FBRVQsOEJBQThCO0FBQzlCLDBFQUEwRTtBQUMxRSx3RUFBd0U7QUFDeEUsNERBQTREO0FBQzVELFNBQVM7QUFFVCxzQkFBc0I7QUFDdEIsT0FBTztBQUVQLHdDQUF3QztBQUN4QyxzREFBc0Q7QUFDdEQsMkRBQTJEO0FBRTNELDJDQUEyQztBQUMzQyxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixnRkFBZ0Y7QUFDaEYsU0FBUztBQUNULHNFQUFzRTtBQUN0RSwrREFBK0Q7QUFFL0QsK0RBQStEO0FBQy9ELG1DQUFtQztBQUNuQyxpREFBaUQ7QUFDakQsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIEx1dW1TcGVjIH0gZnJvbSBcIn5cIlxuXG4vLyBpbXBvcnQgeyB1bmZpbHRlcmVkIH0gZnJvbSBcIn4vY29uc3RhbnRzL2ZpbHRlcnNcIlxuLy8gaW1wb3J0IHsgZGVmYXVsdFNwZWMgfSBmcm9tIFwifi9jb25zdGFudHMvc3BlY1wiXG4vLyBpbXBvcnQgeyBzcGVjVG9IZXggfSBmcm9tIFwifi9leHBvcnRcIlxuLy8gaW1wb3J0IHR5cGUgeyBNaXgsIE1peGVyIH0gZnJvbSBcIn4vbWl4ZXJzXCJcbi8vIGltcG9ydCBtaXhlcnMgZnJvbSBcIn4vbWl4ZXJzXCJcbi8vIGltcG9ydCBtYXBPYmplY3QgZnJvbSBcIn4vdXRpbHMvbWFwT2JqZWN0XCJcblxuLy8gaW1wb3J0IHR5cGUge1xuLy8gICBTd2F0Y2gsXG4vLyAgIEludGVyYWN0aXZlUGFsZXR0ZSxcbi8vICAgSW50ZXJhY3RpdmVTY2hlbWUsXG4vLyAgIEludGVyYWN0aXZlU3dhdGNoLFxuLy8gICBJbnRlcmFjdGl2ZU1peCxcbi8vICAgU2NoZW1lLFxuLy8gICBOb25JbnRlcmFjdGl2ZVNjaGVtZSxcbi8vICAgTm9uSW50ZXJhY3RpdmVQYWxldHRlLFxuLy8gfSBmcm9tIFwiLlwiXG5cbi8vIGV4cG9ydCBjb25zdCBpc0ludGVyYWN0aXZlU3dhdGNoID0gKFxuLy8gICBzd2F0Y2g6IEludGVyYWN0aXZlU3dhdGNoIHwgU3dhdGNoIHwgdW5kZWZpbmVkXG4vLyApOiBzd2F0Y2ggaXMgSW50ZXJhY3RpdmVTd2F0Y2ggPT4ge1xuLy8gICBpZiAoc3dhdGNoID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZVxuLy8gICByZXR1cm4gQm9vbGVhbigoc3dhdGNoIGFzIEludGVyYWN0aXZlU3dhdGNoKS5iYXNlKVxuLy8gfVxuXG4vLyB0eXBlIE1peE5ld1NwZWMgPSAoc3BlYzogTHV1bVNwZWMsIG1peDogTWl4KSA9PiBMdXVtU3BlY1xuXG4vLyBleHBvcnQgY29uc3QgbWl4TmV3U3BlYzogTWl4TmV3U3BlYyA9IChzcGVjLCBtaXgpID0+XG4vLyAgIG1peC5yZWR1Y2U8THV1bVNwZWM+KChjdXJyZW50Q29sb3IsIFtuYW1lLCB2YWx1ZV0pID0+IHtcbi8vICAgICBjb25zdCBtaXhlciA9IG1peGVyc1tuYW1lXSBhcyBNaXhlcjx0eXBlb2YgdmFsdWU+XG4vLyAgICAgcmV0dXJuIG1peGVyKGN1cnJlbnRDb2xvciwgdmFsdWUpXG4vLyAgIH0sIHNwZWMpXG5cbi8vIHR5cGUgTWl4TmV3U3dhdGNoID0gKHNwZWM6IEx1dW1TcGVjLCBtaXg6IE1peCwgZmlsdGVyPzogRmlsdGVyKSA9PiBTd2F0Y2hcblxuLy8gZXhwb3J0IGNvbnN0IG1peE5ld1N3YXRjaDogTWl4TmV3U3dhdGNoID0gKHNwZWMsIG1peCwgZmlsdGVyKSA9PiB7XG4vLyAgIGNvbnN0IHdldCA9IG1peE5ld1NwZWMoc3BlYywgbWl4KVxuLy8gICBjb25zdCBkcnkgPSBzcGVjVG9IZXgod2V0LCBmaWx0ZXIpXG4vLyAgIHJldHVybiB7IHdldCwgZHJ5IH1cbi8vIH1cblxuLy8gdHlwZSBNaXhQYWxldHRlU3RhdGljID0gPFMgZXh0ZW5kcyBOb25JbnRlcmFjdGl2ZVNjaGVtZT4oXG4vLyAgIHNjaGVtZTogUyxcbi8vICAgcGFyZW50Pzoge1xuLy8gICAgIGZpbHRlcjogRmlsdGVyXG4vLyAgICAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgSW50ZXJhY3RpdmVTd2F0Y2g+IHwgUmVjb3JkPHN0cmluZywgU3dhdGNoPlxuLy8gICB9XG4vLyApID0+IE5vbkludGVyYWN0aXZlUGFsZXR0ZTxTPlxuXG4vLyAvLyBleHBvcnQgY29uc3QgbWl4UGFsZXR0ZVN0YXRpYzogTWl4UGFsZXR0ZVN0YXRpYyA9IChzY2hlbWUsIHBhcmVudCkgPT4ge1xuLy8gLy8gICBjb25zdCBmaWx0ZXIgPSBzY2hlbWUuZmlsdGVyIHx8IHBhcmVudD8uZmlsdGVyIHx8IHVuZmlsdGVyZWRcbi8vIC8vICAgY29uc3Qgcm9vdFNwZWMgPSBtaXhOZXdTcGVjKGRlZmF1bHRTcGVjLCBzY2hlbWUucm9vdCB8fCBbXSlcblxuLy8gLy8gICBjb25zdCBwYWxldHRlQXR0cmlidXRlcyA9XG4vLyAvLyAgIG1hcE9iamVjdChzY2hlbWUuYXR0cmlidXRlcywgKG1peDogTWl4LCBrZXkpID0+IHtcbi8vIC8vICAgICBjb25zdCBwYXJlbnRBdHRyaWJ1dGUgPSBwYXJlbnQ/LmF0dHJpYnV0ZXNba2V5XVxuLy8gLy8gICAgIGNvbnN0IHN0YXJ0aW5nUG9pbnQgPSBpc0ludGVyYWN0aXZlU3dhdGNoKHBhcmVudEF0dHJpYnV0ZSlcbi8vIC8vICAgICAgID8gcGFyZW50QXR0cmlidXRlLmJhc2Uud2V0XG4vLyAvLyAgICAgICA6IHBhcmVudEF0dHJpYnV0ZT8ud2V0IHx8IHJvb3RTcGVjXG5cbi8vIC8vICAgICBjb25zb2xlLmxvZyhwYXJlbnRBdHRyaWJ1dGUpXG4vLyAvLyAgICAgY29uc29sZS5sb2coc3RhcnRpbmdQb2ludClcbi8vIC8vICAgICByZXR1cm4gbWl4TmV3U3dhdGNoKHN0YXJ0aW5nUG9pbnQsIG1peCwgZmlsdGVyKVxuLy8gLy8gICB9KSBhcyBSZWNvcmQ8a2V5b2YgdHlwZW9mIHNjaGVtZS5hdHRyaWJ1dGVzLCBTd2F0Y2g+XG5cbi8vIC8vICAgY29uc3QgcGFsZXR0ZTogTm9uSW50ZXJhY3RpdmVQYWxldHRlPHR5cGVvZiBzY2hlbWU+ID0ge1xuLy8gLy8gICAgIGF0dHJpYnV0ZXM6IHBhbGV0dGVBdHRyaWJ1dGVzIGFzIE5vbkludGVyYWN0aXZlUGFsZXR0ZTxcbi8vIC8vICAgICAgIHR5cGVvZiBzY2hlbWVcbi8vIC8vICAgICA+W2BhdHRyaWJ1dGVzYF0sXG4vLyAvLyAgIH1cblxuLy8gLy8gICBpZiAoc2NoZW1lLmNoaWxkcmVuKSB7XG4vLyAvLyAgICAgcGFsZXR0ZS5jaGlsZHJlbiA9IG1hcE9iamVjdChzY2hlbWUuY2hpbGRyZW4sIChjaGlsZDogU2NoZW1lKSA9PlxuLy8gLy8gICAgICAgbWl4UGFsZXR0ZShjaGlsZCwgeyBmaWx0ZXIsIGF0dHJpYnV0ZXM6IHBhbGV0dGVBdHRyaWJ1dGVzIH0pXG4vLyAvLyAgICAgKSBhcyBOb25JbnRlcmFjdGl2ZVBhbGV0dGU8dHlwZW9mIHNjaGVtZT5bYGNoaWxkcmVuYF1cbi8vIC8vICAgfVxuXG4vLyAvLyAgIHJldHVybiBwYWxldHRlXG4vLyAvLyB9XG5cbi8vIC8vIHR5cGUgTWl4UGFsZXR0ZUludGVyYWN0aXZlID0gPFMgZXh0ZW5kcyBJbnRlcmFjdGl2ZVNjaGVtZT4oXG4vLyAvLyAgIHNjaGVtZTogUyxcbi8vIC8vICAgcGFyZW50Pzoge1xuLy8gLy8gICAgIGZpbHRlcjogRmlsdGVyXG4vLyAvLyAgICAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgSW50ZXJhY3RpdmVTd2F0Y2g+IHwgUmVjb3JkPHN0cmluZywgU3dhdGNoPlxuLy8gLy8gICB9XG4vLyAvLyApID0+IEludGVyYWN0aXZlUGFsZXR0ZTxTPlxuXG4vLyAvLyBleHBvcnQgY29uc3QgbWl4UGFsZXR0ZUludGVyYWN0aXZlOiBNaXhQYWxldHRlSW50ZXJhY3RpdmVcbi8vIC8vID0gKHNjaGVtZSwgcGFyZW50KSA9PiB7XG4vLyAvLyAgIGNvbnN0IGZpbHRlciA9IHNjaGVtZS5maWx0ZXIgfHwgcGFyZW50Py5maWx0ZXIgfHwgdW5maWx0ZXJlZFxuLy8gLy8gICBjb25zdCByb290U3BlYyA9IG1peE5ld1NwZWMoZGVmYXVsdFNwZWMsIHNjaGVtZS5yb290IHx8IFtdKVxuXG4vLyAvLyAgIGNvbnN0IGJhc2VTd2F0Y2hlcyA9IG1hcE9iamVjdChcbi8vIC8vICAgICBzY2hlbWUuYXR0cmlidXRlcyxcbi8vIC8vICAgICAoYXR0cmlidXRlOiBJbnRlcmFjdGl2ZU1peCwga2V5KSA9PiB7XG4vLyAvLyAgICAgICBjb25zdCBwYXJlbnRBdHRyaWJ1dGUgPSBwYXJlbnQ/LmF0dHJpYnV0ZXNba2V5XVxuLy8gLy8gICAgICAgY29uc3Qgc3RhcnRpbmdQb2ludCA9IGlzSW50ZXJhY3RpdmVTd2F0Y2gocGFyZW50QXR0cmlidXRlKVxuLy8gLy8gICAgICAgICA/IHBhcmVudEF0dHJpYnV0ZS5iYXNlLndldFxuLy8gLy8gICAgICAgICA6IHBhcmVudEF0dHJpYnV0ZT8ud2V0IHx8IHJvb3RTcGVjXG4vLyAvLyAgICAgICByZXR1cm4gbWl4TmV3U3dhdGNoKHN0YXJ0aW5nUG9pbnQsIGF0dHJpYnV0ZS5iYXNlLCBmaWx0ZXIpXG4vLyAvLyAgICAgfVxuLy8gLy8gICApIGFzIFJlY29yZDxrZXlvZiB0eXBlb2Ygc2NoZW1lLmF0dHJpYnV0ZXMsIFN3YXRjaD5cblxuLy8gLy8gICBjb25zdCBwYWxldHRlQXR0cmlidXRlcyA9IG1hcE9iamVjdChcbi8vIC8vICAgICBzY2hlbWUuYXR0cmlidXRlcyxcbi8vIC8vICAgICAoYXR0cmlidXRlOiBJbnRlcmFjdGl2ZU1peCwgYXR0cmlidXRlS2V5KSA9PlxuLy8gLy8gICAgICAgbWFwT2JqZWN0KGF0dHJpYnV0ZSwgKHN0YXRlOiBNaXgsIHN0YXRlS2V5KSA9PiB7XG4vLyAvLyAgICAgICAgIGlmIChzdGF0ZUtleSA9PT0gYGJhc2VgKSB7XG4vLyAvLyAgICAgICAgICAgcmV0dXJuIGJhc2VTd2F0Y2hlc1thdHRyaWJ1dGVLZXldXG4vLyAvLyAgICAgICAgIH1cbi8vIC8vICAgICAgICAgcmV0dXJuIG1peE5ld1N3YXRjaChiYXNlU3dhdGNoZXNbYXR0cmlidXRlS2V5XS53ZXQsIHN0YXRlLCBmaWx0ZXIpXG4vLyAvLyAgICAgICB9KVxuLy8gLy8gICApIGFzIEludGVyYWN0aXZlUGFsZXR0ZTx0eXBlb2Ygc2NoZW1lPltgYXR0cmlidXRlc2BdXG5cbi8vIC8vICAgY29uc3QgcGFsZXR0ZTogSW50ZXJhY3RpdmVQYWxldHRlPHR5cGVvZiBzY2hlbWU+ID0ge1xuLy8gLy8gICAgIGF0dHJpYnV0ZXM6IHBhbGV0dGVBdHRyaWJ1dGVzLFxuLy8gLy8gICB9XG5cbi8vIC8vICAgaWYgKHNjaGVtZS5jaGlsZHJlbikge1xuLy8gLy8gICAgIHBhbGV0dGUuY2hpbGRyZW4gPSBtYXBPYmplY3Qoc2NoZW1lLmNoaWxkcmVuLCAoY2hpbGQ6IFNjaGVtZSkgPT5cbi8vIC8vICAgICAgIG1peFBhbGV0dGUoY2hpbGQsIHsgZmlsdGVyLCBhdHRyaWJ1dGVzOiBwYWxldHRlQXR0cmlidXRlcyB9KVxuLy8gLy8gICAgICkgYXMgSW50ZXJhY3RpdmVQYWxldHRlPHR5cGVvZiBzY2hlbWU+W2BjaGlsZHJlbmBdXG4vLyAvLyAgIH1cblxuLy8gLy8gICByZXR1cm4gcGFsZXR0ZVxuLy8gLy8gfVxuXG4vLyAvLyBleHBvcnQgY29uc3QgaXNJbnRlcmFjdGl2ZVNjaGVtZSA9XG4vLyAvLyAoc2NoZW1lOiBTY2hlbWUpOiBzY2hlbWUgaXMgSW50ZXJhY3RpdmVTY2hlbWUgPT5cbi8vIC8vICAgIUFycmF5LmlzQXJyYXkoT2JqZWN0LnZhbHVlcyhzY2hlbWUuYXR0cmlidXRlcylbMF0pXG5cbi8vIC8vIHR5cGUgTWl4UGFsZXR0ZSA9IDxTIGV4dGVuZHMgU2NoZW1lPihcbi8vIC8vICAgc2NoZW1lOiBTLFxuLy8gLy8gICBwYXJlbnQ/OiB7XG4vLyAvLyAgICAgZmlsdGVyOiBGaWx0ZXJcbi8vIC8vICAgICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBJbnRlcmFjdGl2ZVN3YXRjaD4gfCBSZWNvcmQ8c3RyaW5nLCBTd2F0Y2g+XG4vLyAvLyAgIH1cbi8vIC8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbi8vIC8vICkgPT4gSW50ZXJhY3RpdmVQYWxldHRlPGFueT4gfCBOb25JbnRlcmFjdGl2ZVBhbGV0dGU8YW55PlxuXG4vLyAvLyBleHBvcnQgY29uc3QgbWl4UGFsZXR0ZTogTWl4UGFsZXR0ZSA9IChzY2hlbWUsIHBhcmVudCkgPT5cbi8vIC8vICAgaXNJbnRlcmFjdGl2ZVNjaGVtZShzY2hlbWUpXG4vLyAvLyAgICAgPyBtaXhQYWxldHRlSW50ZXJhY3RpdmUoc2NoZW1lLCBwYXJlbnQpXG4vLyAvLyAgICAgOiBtaXhQYWxldHRlU3RhdGljKHNjaGVtZSwgcGFyZW50KVxuIl19