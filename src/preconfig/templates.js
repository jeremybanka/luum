export default { trifactory: {
  PaletteModule: {
    color: 0,
    bg: {},
    mg: { shade: 10 },
    fg: { contrast: 'soft' },
    holds: {
      Control: {
        state: {
          hover: { tint: 12 },
          active: { shade: 18 },
          // disabled: { sat: 30 },
        },
        bg: { shade: 24 },
        mg: { shade: 48 },
        fg: {
          contrast: 'soft',
          state: {
            hover: { contrast: 'soft' },
            active: { contrast: 'hard' },
            // disabled: { contrast: 'soft', shade: 20 },
          },
        },
      },
    },
  },
} }

// color scheme  ->           = CSS stylesheet
// color palette -> component = CSS scope
// color element -> role      = CSS variable
// color state   ->             CSS pseudo-class

// factored ops -> nested hex lists -> compiled form (CSS)
// scheme       -> palette set      -> package

// ops
// _ PaletteName   // use
// _ transformation
// _ input > state
// _ el

/* scheme

*/

// palettes
export const palettes = [
  {
    id: 'PaletteName',
    hex: '#f00',
    states: [
      {
        id: 'base',
        hex: '#f00',
        elements: [
          { id: 'bg',
            hex: '#f00' },
          { id: 'mg',
            hex: '#f00' },
          { id: 'fg',
            hex: '#f00' },
        ],
      },
      {
        id: 'hover',
        hex: '#f00',
        elements: [
          { id: 'bg',
            hex: '#f00' },
          { id: 'mg',
            hex: '#f00' },
          { id: 'fg',
            hex: '#f00' },
        ],
      },
    ],
  },
]

/*
const colorSchema = {
  exfg: colorContext.softContrast,
  exbg: hex,
  fg: {
    base: colorContext.softContrast,
    hover: colorContext.softContrast,
    active: colorContext.hardContrast,
    disable: a,
  },
  mg: [20, 15, 25].map(n => shade(n)),
  bg: [10, 5, 15].map(n => shade(n)),
}

const stylesheet = `
a
`
*/
