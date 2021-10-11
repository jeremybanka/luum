const funnel = (value, [min, max]) =>
  value > max
    ? max
    : value < min
      ? min
      : value

export default funnel
