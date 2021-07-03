export default function wrapAround(value, [min, max]) {
  const range = max - min
  while(value >= max) value -= range
  while(value < min) value += range
  return value
}
