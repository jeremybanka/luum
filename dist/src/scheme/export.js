"use strict";
// import type {
//   CssSelector,
//   InteractivePalette,
//   NonInteractivePalette,
//   Palette,
//   Scheme,
// } from "."
// import { mixPalette } from "."
// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const isInteractivePalette = (
//   palette: Palette<any>
// ): palette is InteractivePalette<any> =>
//   !Object.values(palette.attributes)[0].dry
// /* eslint-enable @typescript-eslint/no-explicit-any */
// const indent = (indent = 1, text: string) => ` `.repeat(indent * 2) + text
// const openCssRule = (gen = 0, ...selectors: CssSelector[]): string =>
//   selectors.length > 1
//     ? selectors.reduce<string>((acc, selector, idx) => {
//         const maybeComma = idx === 0 ? `` : `,`
//         return `\n` + indent(gen, selector) + maybeComma + acc
//       }, ``) + ` {\n`
//     : `${indent(gen, `${selectors[0]} {\n`)}`
// const closeCssRule = (gen = 0) => `${indent(gen, `}\n`)}`
// const createCssProperty = (key: string, value: string, gen = 0) =>
//   indent(1 + gen, `${key}: ${value};\n`)
// export const paletteToScssDeclarationStatic = (
//   palette: NonInteractivePalette<any>,
//   generation: number
// ): string => {
//   let scssDeclaration = ``
//   for (const [attribute, { dry: hex }]
//   of Object.entries(palette.attributes)) {
//     scssDeclaration += createCssProperty(attribute, hex, generation)
//   }
//   return scssDeclaration
// }
// export const paletteToScssDeclarationInteractive = (
//   palette: InteractivePalette<any>,
//   gen: number
// ): string => {
//   let declaration = ``
//   const stateDeclarations = {
//     hover: openCssRule(gen + 1, `&:hover`, `&:focus`, `&:focus-within`),
//     active: openCssRule(gen + 1, `&:active`, `&.active`),
//     disabled: openCssRule(gen + 1, `&:disabled`, `&.disabled`),
//   }
//   for (const [key, { base, hover, active, disabled }] of Object.entries(
//     palette.attributes
//   )) {
//     declaration += createCssProperty(key, base.dry, gen)
//     stateDeclarations.hover += createCssProperty(key, hover.dry, gen + 1)
//     stateDeclarations.active += createCssProperty(key, active.dry, gen + 1)
//     stateDeclarations.disabled
//     += createCssProperty(key, disabled.dry, gen + 1)
//   }
//   stateDeclarations.hover += closeCssRule(gen + 1)
//   stateDeclarations.active += closeCssRule(gen + 1)
//   stateDeclarations.disabled += closeCssRule(gen + 1)
//   declaration += stateDeclarations.hover
//   declaration += stateDeclarations.active
//   declaration += stateDeclarations.disabled
//   return declaration
// }
// export const paletteToScssDeclaration = <T extends Scheme>(
//   palette: Palette<T>,
//   generation: number
// ): string =>
//   isInteractivePalette(palette)
//     ? paletteToScssDeclarationInteractive(palette, generation)
//     : paletteToScssDeclarationStatic(palette, generation)
// export const nestChildRules = (
//   palette: Palette<any>,
//   generation: number
// ): string => {
//   let nestedRules = ``
//   if (palette.children) {
//     for (const child of Object.entries(palette.children)) {
//       const [selector, childPalette] = child as [CssSelector, Palette<any>]
//       nestedRules += paletteToScssRule(selector, childPalette, generation + 1)
//     }
//   }
//   return nestedRules
// }
// export const paletteToScssRule = (
//   selector: CssSelector,
//   palette: Palette<any>,
//   generation = 0
// ): string => {
//   let scssBlock = openCssRule(generation, selector)
//   scssBlock += paletteToScssDeclaration(palette, generation)
//   scssBlock += nestChildRules(palette, generation)
//   scssBlock += closeCssRule(generation)
//   return scssBlock
// }
// export type SchemeToScssRule =
// (selector: CssSelector, scheme: Scheme) => string
// export const schemeToScssRule: SchemeToScssRule = (selector, scheme) => {
//   const palette = mixPalette(scheme)
//   const scss = paletteToScssRule(selector, palette)
//   return scss
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtZS9leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsWUFBWTtBQUNaLGFBQWE7QUFDYixpQ0FBaUM7QUFFakMsMERBQTBEO0FBQzFELHdDQUF3QztBQUN4QywwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5Qyx5REFBeUQ7QUFFekQsNkVBQTZFO0FBRTdFLHdFQUF3RTtBQUN4RSx5QkFBeUI7QUFDekIsMkRBQTJEO0FBQzNELGtEQUFrRDtBQUNsRCxpRUFBaUU7QUFDakUsd0JBQXdCO0FBQ3hCLGdEQUFnRDtBQUVoRCw0REFBNEQ7QUFFNUQscUVBQXFFO0FBQ3JFLDJDQUEyQztBQUUzQyxrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLHlDQUF5QztBQUN6Qyw2Q0FBNkM7QUFDN0MsdUVBQXVFO0FBQ3ZFLE1BQU07QUFDTiwyQkFBMkI7QUFDM0IsSUFBSTtBQUVKLHVEQUF1RDtBQUN2RCxzQ0FBc0M7QUFDdEMsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLDJFQUEyRTtBQUMzRSw0REFBNEQ7QUFDNUQsa0VBQWtFO0FBQ2xFLE1BQU07QUFDTiwyRUFBMkU7QUFDM0UseUJBQXlCO0FBQ3pCLFNBQVM7QUFDVCwyREFBMkQ7QUFDM0QsNEVBQTRFO0FBQzVFLDhFQUE4RTtBQUM5RSxpQ0FBaUM7QUFDakMsdURBQXVEO0FBQ3ZELE1BQU07QUFDTixxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELHdEQUF3RDtBQUN4RCwyQ0FBMkM7QUFDM0MsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5Qyx1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLDhEQUE4RDtBQUM5RCx5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBQ2pFLDREQUE0RDtBQUU1RCxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qiw4REFBOEQ7QUFDOUQsOEVBQThFO0FBQzlFLGlGQUFpRjtBQUNqRixRQUFRO0FBQ1IsTUFBTTtBQUNOLHVCQUF1QjtBQUN2QixJQUFJO0FBRUoscUNBQXFDO0FBQ3JDLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixzREFBc0Q7QUFDdEQsK0RBQStEO0FBQy9ELHFEQUFxRDtBQUNyRCwwQ0FBMEM7QUFDMUMscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixpQ0FBaUM7QUFDakMsb0RBQW9EO0FBRXBELDRFQUE0RTtBQUM1RSx1Q0FBdUM7QUFDdkMsc0RBQXNEO0FBQ3RELGdCQUFnQjtBQUNoQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHR5cGUge1xuLy8gICBDc3NTZWxlY3Rvcixcbi8vICAgSW50ZXJhY3RpdmVQYWxldHRlLFxuLy8gICBOb25JbnRlcmFjdGl2ZVBhbGV0dGUsXG4vLyAgIFBhbGV0dGUsXG4vLyAgIFNjaGVtZSxcbi8vIH0gZnJvbSBcIi5cIlxuLy8gaW1wb3J0IHsgbWl4UGFsZXR0ZSB9IGZyb20gXCIuXCJcblxuLy8gLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLy8gZXhwb3J0IGNvbnN0IGlzSW50ZXJhY3RpdmVQYWxldHRlID0gKFxuLy8gICBwYWxldHRlOiBQYWxldHRlPGFueT5cbi8vICk6IHBhbGV0dGUgaXMgSW50ZXJhY3RpdmVQYWxldHRlPGFueT4gPT5cbi8vICAgIU9iamVjdC52YWx1ZXMocGFsZXR0ZS5hdHRyaWJ1dGVzKVswXS5kcnlcbi8vIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG4vLyBjb25zdCBpbmRlbnQgPSAoaW5kZW50ID0gMSwgdGV4dDogc3RyaW5nKSA9PiBgIGAucmVwZWF0KGluZGVudCAqIDIpICsgdGV4dFxuXG4vLyBjb25zdCBvcGVuQ3NzUnVsZSA9IChnZW4gPSAwLCAuLi5zZWxlY3RvcnM6IENzc1NlbGVjdG9yW10pOiBzdHJpbmcgPT5cbi8vICAgc2VsZWN0b3JzLmxlbmd0aCA+IDFcbi8vICAgICA/IHNlbGVjdG9ycy5yZWR1Y2U8c3RyaW5nPigoYWNjLCBzZWxlY3RvciwgaWR4KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG1heWJlQ29tbWEgPSBpZHggPT09IDAgPyBgYCA6IGAsYFxuLy8gICAgICAgICByZXR1cm4gYFxcbmAgKyBpbmRlbnQoZ2VuLCBzZWxlY3RvcikgKyBtYXliZUNvbW1hICsgYWNjXG4vLyAgICAgICB9LCBgYCkgKyBgIHtcXG5gXG4vLyAgICAgOiBgJHtpbmRlbnQoZ2VuLCBgJHtzZWxlY3RvcnNbMF19IHtcXG5gKX1gXG5cbi8vIGNvbnN0IGNsb3NlQ3NzUnVsZSA9IChnZW4gPSAwKSA9PiBgJHtpbmRlbnQoZ2VuLCBgfVxcbmApfWBcblxuLy8gY29uc3QgY3JlYXRlQ3NzUHJvcGVydHkgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGdlbiA9IDApID0+XG4vLyAgIGluZGVudCgxICsgZ2VuLCBgJHtrZXl9OiAke3ZhbHVlfTtcXG5gKVxuXG4vLyBleHBvcnQgY29uc3QgcGFsZXR0ZVRvU2Nzc0RlY2xhcmF0aW9uU3RhdGljID0gKFxuLy8gICBwYWxldHRlOiBOb25JbnRlcmFjdGl2ZVBhbGV0dGU8YW55Pixcbi8vICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4vLyApOiBzdHJpbmcgPT4ge1xuLy8gICBsZXQgc2Nzc0RlY2xhcmF0aW9uID0gYGBcbi8vICAgZm9yIChjb25zdCBbYXR0cmlidXRlLCB7IGRyeTogaGV4IH1dXG4vLyAgIG9mIE9iamVjdC5lbnRyaWVzKHBhbGV0dGUuYXR0cmlidXRlcykpIHtcbi8vICAgICBzY3NzRGVjbGFyYXRpb24gKz0gY3JlYXRlQ3NzUHJvcGVydHkoYXR0cmlidXRlLCBoZXgsIGdlbmVyYXRpb24pXG4vLyAgIH1cbi8vICAgcmV0dXJuIHNjc3NEZWNsYXJhdGlvblxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcGFsZXR0ZVRvU2Nzc0RlY2xhcmF0aW9uSW50ZXJhY3RpdmUgPSAoXG4vLyAgIHBhbGV0dGU6IEludGVyYWN0aXZlUGFsZXR0ZTxhbnk+LFxuLy8gICBnZW46IG51bWJlclxuLy8gKTogc3RyaW5nID0+IHtcbi8vICAgbGV0IGRlY2xhcmF0aW9uID0gYGBcbi8vICAgY29uc3Qgc3RhdGVEZWNsYXJhdGlvbnMgPSB7XG4vLyAgICAgaG92ZXI6IG9wZW5Dc3NSdWxlKGdlbiArIDEsIGAmOmhvdmVyYCwgYCY6Zm9jdXNgLCBgJjpmb2N1cy13aXRoaW5gKSxcbi8vICAgICBhY3RpdmU6IG9wZW5Dc3NSdWxlKGdlbiArIDEsIGAmOmFjdGl2ZWAsIGAmLmFjdGl2ZWApLFxuLy8gICAgIGRpc2FibGVkOiBvcGVuQ3NzUnVsZShnZW4gKyAxLCBgJjpkaXNhYmxlZGAsIGAmLmRpc2FibGVkYCksXG4vLyAgIH1cbi8vICAgZm9yIChjb25zdCBba2V5LCB7IGJhc2UsIGhvdmVyLCBhY3RpdmUsIGRpc2FibGVkIH1dIG9mIE9iamVjdC5lbnRyaWVzKFxuLy8gICAgIHBhbGV0dGUuYXR0cmlidXRlc1xuLy8gICApKSB7XG4vLyAgICAgZGVjbGFyYXRpb24gKz0gY3JlYXRlQ3NzUHJvcGVydHkoa2V5LCBiYXNlLmRyeSwgZ2VuKVxuLy8gICAgIHN0YXRlRGVjbGFyYXRpb25zLmhvdmVyICs9IGNyZWF0ZUNzc1Byb3BlcnR5KGtleSwgaG92ZXIuZHJ5LCBnZW4gKyAxKVxuLy8gICAgIHN0YXRlRGVjbGFyYXRpb25zLmFjdGl2ZSArPSBjcmVhdGVDc3NQcm9wZXJ0eShrZXksIGFjdGl2ZS5kcnksIGdlbiArIDEpXG4vLyAgICAgc3RhdGVEZWNsYXJhdGlvbnMuZGlzYWJsZWRcbi8vICAgICArPSBjcmVhdGVDc3NQcm9wZXJ0eShrZXksIGRpc2FibGVkLmRyeSwgZ2VuICsgMSlcbi8vICAgfVxuLy8gICBzdGF0ZURlY2xhcmF0aW9ucy5ob3ZlciArPSBjbG9zZUNzc1J1bGUoZ2VuICsgMSlcbi8vICAgc3RhdGVEZWNsYXJhdGlvbnMuYWN0aXZlICs9IGNsb3NlQ3NzUnVsZShnZW4gKyAxKVxuLy8gICBzdGF0ZURlY2xhcmF0aW9ucy5kaXNhYmxlZCArPSBjbG9zZUNzc1J1bGUoZ2VuICsgMSlcbi8vICAgZGVjbGFyYXRpb24gKz0gc3RhdGVEZWNsYXJhdGlvbnMuaG92ZXJcbi8vICAgZGVjbGFyYXRpb24gKz0gc3RhdGVEZWNsYXJhdGlvbnMuYWN0aXZlXG4vLyAgIGRlY2xhcmF0aW9uICs9IHN0YXRlRGVjbGFyYXRpb25zLmRpc2FibGVkXG4vLyAgIHJldHVybiBkZWNsYXJhdGlvblxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcGFsZXR0ZVRvU2Nzc0RlY2xhcmF0aW9uID0gPFQgZXh0ZW5kcyBTY2hlbWU+KFxuLy8gICBwYWxldHRlOiBQYWxldHRlPFQ+LFxuLy8gICBnZW5lcmF0aW9uOiBudW1iZXJcbi8vICk6IHN0cmluZyA9PlxuLy8gICBpc0ludGVyYWN0aXZlUGFsZXR0ZShwYWxldHRlKVxuLy8gICAgID8gcGFsZXR0ZVRvU2Nzc0RlY2xhcmF0aW9uSW50ZXJhY3RpdmUocGFsZXR0ZSwgZ2VuZXJhdGlvbilcbi8vICAgICA6IHBhbGV0dGVUb1Njc3NEZWNsYXJhdGlvblN0YXRpYyhwYWxldHRlLCBnZW5lcmF0aW9uKVxuXG4vLyBleHBvcnQgY29uc3QgbmVzdENoaWxkUnVsZXMgPSAoXG4vLyAgIHBhbGV0dGU6IFBhbGV0dGU8YW55Pixcbi8vICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4vLyApOiBzdHJpbmcgPT4ge1xuLy8gICBsZXQgbmVzdGVkUnVsZXMgPSBgYFxuLy8gICBpZiAocGFsZXR0ZS5jaGlsZHJlbikge1xuLy8gICAgIGZvciAoY29uc3QgY2hpbGQgb2YgT2JqZWN0LmVudHJpZXMocGFsZXR0ZS5jaGlsZHJlbikpIHtcbi8vICAgICAgIGNvbnN0IFtzZWxlY3RvciwgY2hpbGRQYWxldHRlXSA9IGNoaWxkIGFzIFtDc3NTZWxlY3RvciwgUGFsZXR0ZTxhbnk+XVxuLy8gICAgICAgbmVzdGVkUnVsZXMgKz0gcGFsZXR0ZVRvU2Nzc1J1bGUoc2VsZWN0b3IsIGNoaWxkUGFsZXR0ZSwgZ2VuZXJhdGlvbiArIDEpXG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBuZXN0ZWRSdWxlc1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcGFsZXR0ZVRvU2Nzc1J1bGUgPSAoXG4vLyAgIHNlbGVjdG9yOiBDc3NTZWxlY3Rvcixcbi8vICAgcGFsZXR0ZTogUGFsZXR0ZTxhbnk+LFxuLy8gICBnZW5lcmF0aW9uID0gMFxuLy8gKTogc3RyaW5nID0+IHtcbi8vICAgbGV0IHNjc3NCbG9jayA9IG9wZW5Dc3NSdWxlKGdlbmVyYXRpb24sIHNlbGVjdG9yKVxuLy8gICBzY3NzQmxvY2sgKz0gcGFsZXR0ZVRvU2Nzc0RlY2xhcmF0aW9uKHBhbGV0dGUsIGdlbmVyYXRpb24pXG4vLyAgIHNjc3NCbG9jayArPSBuZXN0Q2hpbGRSdWxlcyhwYWxldHRlLCBnZW5lcmF0aW9uKVxuLy8gICBzY3NzQmxvY2sgKz0gY2xvc2VDc3NSdWxlKGdlbmVyYXRpb24pXG4vLyAgIHJldHVybiBzY3NzQmxvY2tcbi8vIH1cblxuLy8gZXhwb3J0IHR5cGUgU2NoZW1lVG9TY3NzUnVsZSA9XG4vLyAoc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzY2hlbWU6IFNjaGVtZSkgPT4gc3RyaW5nXG5cbi8vIGV4cG9ydCBjb25zdCBzY2hlbWVUb1Njc3NSdWxlOiBTY2hlbWVUb1Njc3NSdWxlID0gKHNlbGVjdG9yLCBzY2hlbWUpID0+IHtcbi8vICAgY29uc3QgcGFsZXR0ZSA9IG1peFBhbGV0dGUoc2NoZW1lKVxuLy8gICBjb25zdCBzY3NzID0gcGFsZXR0ZVRvU2Nzc1J1bGUoc2VsZWN0b3IsIHBhbGV0dGUpXG4vLyAgIHJldHVybiBzY3NzXG4vLyB9XG4iXX0=