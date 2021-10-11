import wrapAround from "./wrapAround"

const COLOR_WHEEL = [
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `turquoise`,
  `blue`,
  `purple`,
]

export function getNextColor(nameOfColor) {
  // purple
  const indexOfColor = COLOR_WHEEL.indexOf(nameOfColor) // 6
  const indexOfNextColor = wrapAround(
    indexOfColor + 1 /* 7 */,
    [0, COLOR_WHEEL.length] /* 7 */
  )
  const nextColor = COLOR_WHEEL[indexOfNextColor]
  return nextColor
}
