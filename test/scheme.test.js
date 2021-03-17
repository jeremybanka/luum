// import { mixPalettes } from "../../src/scheme"

const { mixPalettes } = require("../src/scheme")

test("mixPalettes errors properly when no hex values are provided", () => {
  const input = {
    palettes: [],
    hexes: [],
    ops: {},
  }
  expect(() => mixPalettes(input)).toThrow(Error)
})

test("mixPalettes errors if not provided with at least one palette", () => {
  const input = {
    palettes: [],
    hexes: ['#f00'],
    ops: {},
  }
  expect(() => mixPalettes(input)).toThrow(Error)
})

test("mixPalettes happy path min input", () => {
  const palette = {
    id: 'foo',
    states: { base: { elements: {} } },
  }
  const input = {
    palettes: [palette],
    hexes: ['#f00'],
    ops: {},
  }
  const output = mixPalettes(input)

  const expected = [{
    "color": { "hue": 0, "lum": 0.25, "sat": 255 },
    "id": "foo",
    "states": { "base": { "elements": {} } },
  }]
  expect(output).toEqual(expected)
})

test("mixPalettes happy path one op", () => {
  const palette = {
    id: 'foo',
    states: { base: { elements: {} } },
  }
  const input = {
    palettes: [palette],
    hexes: ['#f00'],
    ops: { shade: 20 },
  }
  const output = mixPalettes(input)

  const expected = [{
    "color": { "hue": 0, "lum": 0.2, "sat": 255, prefer: 'lum' },
    "id": "foo",
    "states": { "base": {
      "elements": {},
      color: {
        "hue": 0, "lum": 0.2, "sat": 255, prefer: 'lum',
      },
    } },
  }]
  expect(output).toEqual(expected)
})

test("mixPalettes happy path one op one element", () => {
  const palette = {
    id: 'foo',
    states: { base: { elements: {} } },
  }
  const input = {
    palettes: [palette],
    hexes: ['#f00'],
    ops: { shade: 20, bg: {} },
  }
  const output = mixPalettes(input)

  const expected = [{
    "color": { "hue": 0, "lum": 0.2, "sat": 255, prefer: 'lum' },
    "id": "foo",
    "states": { "base": {
      "elements": {
        bg: {
          color: {
            "hue": 0, "lum": 0.2, "sat": 255, prefer: 'lum',
          },
          id: 'bg',
        },
      },
      color: {
        "hue": 0, "lum": 0.2, "sat": 255, prefer: 'lum',
      },
    } },
  }]
  expect(output).toEqual(expected)
})
