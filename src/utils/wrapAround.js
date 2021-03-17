export default function wrapAround(value, [min, max]) {
  while(value >= max) value -= (max - min)
  while(value < min) value += (max - min)
  return value
}
