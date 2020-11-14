// COLOR CONTEXT ARCHITECTURE CURRENT REVISION
const shade = lum => getOffset({
  hex,
  tuner,
  offsets: [{ attribute: 'lum', offsetValue: lum / -100 }],
})

const colorContext = {
  hardContrast: hardContrast(hex),
  softContrast: softContrast(hex, tuner),
}

const colorScheme = {
  exfg: colorContext.softContrast,
  exbg: hex,
  fg: [colorContext.softContrast, colorContext.softContrast, colorContext.hardContrast],
  mg: [20, 15, 25].map(n => shade(n)),
  bg: [10, 5, 15].map(n => shade(n)),
}

// COLOR CONTEXT ARCHITECTURE WIP
/*
  const colorSchemeDraft = hex => {
    const shade = lum => getOffset({
      hex,
      tuner,
      offsets: [{ attribute: 'lum', offsetValue: lum / -100 }],
    })
    return ({
      neutral: {
        fg: softContrast(hex, tuner),
        mg: shade(20),
        bg: shade(10),
      },
      focus: {
        fg: softContrast(hex, tuner),
        mg: shade(15),
        bg: shade(5),
      },
      active: {
        fg: hardContrast(hex, tuner),
        mg: shade(25),
        bg: shade(15),
      },
      disabled: {
        fg: shade(30),
        mg: shade(15),
        bg: shade(5),
      },
    })
  }
*/
// COLORPLAN ARCHITECTURE
/*
  const colorPlanRegularButton = {
    fg: [],
    mg: [],
    bg: [],
  }
*/
