import { wrapAround } from "../utils"

const rangeNames = [
  { hue: 20,
    name: `orange` },
  { hue: 45,
    name: `yellow` },
  { hue: 61,
    name: `citron` },
  { hue: 80,
    name: `lime` },
  { hue: 100,
    name: `green` },
  { hue: 150,
    name: `teal` },
  { hue: 180,
    name: `cyan` },
  { hue: 200,
    name: `blue` },
  { hue: 240,
    name: `indigo` },
  { hue: 270,
    name: `violet` },
  { hue: 300,
    name: `magenta` },
  { hue: 330,
    name: `pink` },
  { hue: 350,
    name: `red` },
]

export default hue => {
  // console.log('||| hue', hue)
  const hueWrapped = wrapAround(hue, [0, 360])
  for (let a = -1, b = 0; b < rangeNames.length; a++, b++) {
    a = wrapAround(a, [0, rangeNames.length])
    const hueDoubleWrapped = a > b
      ? wrapAround(hueWrapped, [-180, 180])
      : undefined
    const namingPointA = rangeNames[a]
    const namingPointB = rangeNames[b]
    const hueA = a > b
      ? wrapAround(namingPointA.hue, [-180, 180])
      : namingPointA.hue
    const hueB = namingPointB.hue
    if (
      (hueDoubleWrapped || hueWrapped) >= hueA
      && (hueDoubleWrapped || hueWrapped) < hueB) {
      /*
      console.log('||| hue', hue,
        'is between', namingPointA.hue,
        'and', namingPointB.hue,
        'therefore it is named', namingPointA.name)
      */
      return namingPointA.name
    }
  }
}
