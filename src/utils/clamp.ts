const clamp = (value: number, [min, max]: [number, number]): number =>
  value > max ? max : value < min ? min : value

export default clamp
