import { hexToSpec } from "../import"
import {
  hardContrast,
  softContrast,
} from "../contrast"
import { specToHex } from "../export"

function offsetColor({
  hex,
  tuner,
  offsets,
}) {
  const rootSpec = hexToSpec(hex)
  const changes = {}
  for(let index = 0; index < offsets.length; index++) {
    const { attribute, offsetValue } = offsets[index]
    const rootValue = rootSpec[attribute]
    const { sat } = rootSpec
    let newValue
    switch(attribute) {
      case 'hue':
      case 'sat':
        newValue = rootValue + offsetValue
        break
      case 'lum':
        if(offsetValue + rootValue < 0 || offsetValue + rootValue > 1) {
          newValue = rootValue - (offsetValue - (sat >= 170 ? offsetValue * (sat - 170) / 85 : 0)) * 1.67
        } else { newValue = rootValue + (offsetValue - (sat >= 170 ? 0.333 * offsetValue * (sat - 170) / 85 : 0)) }
        break
      default:
        throw new Error('Received spec attribute other than "hue," "sat," or "lum."')
    }
    changes[attribute] = newValue
  }
  const newHex = specToHex({
    ...rootSpec,
    ...changes,
    prefer: 'lum',
    tuner,
  })
  return newHex
}

const colorContext = {
  hardContrast: hardContrast(hex),
  softContrast: softContrast(hex, tuner),
}

export default {
  ui(hex, tuner) {
    const shade = lum => offsetColor({
      hex,
      tuner,
      offsets: [{ attribute: 'lum', offsetValue: lum / -100 }],
    })
    const tint = lum => offsetColor({
      hex,
      tuner,
      offsets: [{ attribute: 'lum', offsetValue: lum / 100 }],
    })
    const fade = lum => offsetColor({
      hex,
      tuner,
      offsets: [
        { attribute: 'lum', offsetValue: lum / 100 },
        { attribute: 'sat', exactValue: lum / 100 },
      ],
    })
    const derive = offsets => offsetColor({
      hex,
      tuner,
      offsets,
    })

    const rootSpec = hexToSpec(hex)
    /*
    const plan = {
      ...rootSpec,
      gradients: {
      axes,
      },
    }
    */
    const tree = {
      color: '#0088cc',
      derive: [
        {
          color: { tetrane: 1 },
          derive: [
            {
              color: { lum: 0.95 },
              scope: [['section']],
              role: ['bg'],
              derive: [
                {
                  color: { shade: 1 },
                  scope: [
                    { role: 'bg', elements: ['html', 'panel'] },
                  ],
                },
              ],
            },

          ],
        },
      ],
    }
    const protoSchema = [
      {
        hexes: {
          red: '#ff0000',
          cyan: '#008888',
        },
        fg: { sat: 10 },
        children: [
          {
            elements: ['html'],
            fg: [red, { lum: 0.05 }],
            mg: { lum: 0.025 },
            bg: { Tetrane: 1, sat: 10, lum: 0.95 },
            children: [
              {
                elements: ['section'],
                bg: { Shade: 10 },
              },
            ],
          },
        ],
      },
    ]
    const trifactoryPaletteModuleSchema = {
      html: {
        fg: { color: 0, contrast: 'soft' },
        mg: { color: 0, shade: 20 },
        bg: { color: 0 },
      },
      root: {
        color: 0,
        fg: { contrast: 'soft' },
        mg: { shade: 20 },
        bg: {},
      },

      control1: {
        color: 0,
        shade: 10,
        bg: {
          input: {
            hover: { tint: 20 },
            active: { shade: 10 },
            disabled: { sat: x => x - 100 },
          },
        },
        mg: {
          shade: 20,
          input: {
            hover: { tint: 20 },
            active: { shade: 10 },
            disabled: { sat: x => x - 100 },
          },
        },
        fg: {
          input: {
            hover: { contrast: 'soft' },
            active: { contrast: 'hard' },
            disabled: { contrast: 'soft', shade: 20 },
          },
        },
      },
      control: {
        color: 0,
        shade: 10,
        input: {
          hover: { tint: 20 },
          active: { shade: 10 },
          disabled: { sat: x => x - 100 },
        },
        bg: {},
        mg: { shade: 20 },
        fg: {
          input: {
            hover: { contrast: 'soft' },
            active: { contrast: 'hard' },
            disabled: { contrast: 'soft', shade: 20 },
          },
        },
      },
    }
    // FUNCTIONS
    // color
    // hue, sat, lum
    // contrast, support,
    // fade, wash, char, shade, tint
    // hue:
    // sat:
    // lum:
    //
    // VARIABLES
    // basic set: fg, mg, bg
    const luumTemplate = [
      {
        Root: {
          color: 0,
          bg: {},
          mg: { shade: 20 },
          fg: { contrast: 'soft' },
          holds: {
            Control: {
              shade: 10,
              input: {
                hover: { tint: 10 },
                active: { shade: 10 },
                disabled: { sat: x => x - 100 },
              },
              bg: {},
              mg: { shade: 20 },
              fg: {
                input: {
                  hover: { contrast: 'soft' },
                  active: { contrast: 'hard' },
                  disabled: { contrast: 'soft', shade: 20 },
                },
              },
            },
          },
        },
      },
    ]

    function luumTemplateToColorSchemes(colors, template) {
      const templateEntries = Object.entries(template)
      const colorSchemes = []
      for(let idx = 0; idx < templateEntries; idx++) {
        const colorScheme = {}
        const [key, value] = templateMap[idx]
        switch(key) {
          case 'color': break
          default: break
        }
      }
    }

    // seeds
    // pattern
    // kit
    // scheme
    return {
      root: hex,
      contrast: {
        soft: softContrast(hex, tuner),
        hard: hardContrast(hex),
      },
      offset: {
        shades: {
          s00: hex,       //
          s05: shade(5),  //
          s10: shade(10), //
          s15: shade(15), //
          s20: shade(20), //
          s25: shade(25), //
        },
        tints: [
          hex,
          tint(5),
          tint(10),
          tint(15),
          tint(20),
          tint(25),
        ],
        fades: [
          hex,
          derive([{ attribute: 'lum', offsetValue: lum / 100 }]),
          derive([['lum', -0.05], ['sat', -50]]),
          fade(10),
          fade(15),
          fade(20),
          fade(25),
        ],
        burns: [
          burn(0),
          burn(5),
          burn(10),
          burn(15),
          burn(20),
          burn(25),
        ],
      },
    }
  },

}
