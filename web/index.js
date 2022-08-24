// src/constants/index.ts
var HUE_STRUCTURES = {
  none: [],
  polar: [180],
  split: [150, 210],
  trine: [120, 240],
  square: [90, 180, 270]
};
var CHANNEL_SPECIFIC_LUM = {
  R: 0.3,
  G: 0.5,
  B: 0.2
};

// src/constants/filters.ts
var unfiltered = [
  { sat: 255, hue: 0 },
  { sat: 255, hue: 360 }
];
var CMYK = [
  { sat: 255, hue: 55 },
  { sat: 127, hue: 120 },
  { sat: 255, hue: 200 },
  { sat: 255, hue: 205 },
  { sat: 170, hue: 240 },
  { sat: 230, hue: 270 },
  { sat: 210, hue: 300 },
  { sat: 255, hue: 320 }
];

// src/constants/schemes.ts
var UI = {
  state: {
    hover: {},
    active: {},
    disabled: {}
  },
  bg: {
    shade: 24,
    state: {
      base: {},
      hover: { shade: 18 },
      active: { shade: 32 },
      disabled: { shade: 32 }
    }
  },
  mg: {
    shade: 48
  },
  fg: {
    contrast: `soft`,
    state: {
      hover: { contrast: `harden` },
      active: { contrast: `harden` },
      disabled: { shade: 20 }
    }
  }
};
var trifactory = {
  PaletteModule: {
    contextColor: [{ resetColor: `#fee` }, { shade: 20 }],
    variables: {
      bg: [],
      mg: [{ resetColor: 1 }, { shade: 10 }],
      fg: [{ contrast: `soft` }]
    },
    children: {
      Control: {
        states: {
          base: {},
          hover: [{ tint: 12 }],
          active: [{ shade: 18 }]
        },
        variables: {
          bg: [{ shade: 24 }],
          mg: [{ shade: 48 }],
          fg: {
            states: {
              base: [{ shade: 24 }, { contrast: `soft` }],
              hover: [{ shade: 24 }, { contrast: `soft` }],
              active: [{ shade: 24 }, { contrast: `hard` }]
            }
          }
        }
      }
    }
  }
};
var palettes = [
  {
    id: `PaletteName`,
    hex: `#f00`,
    states: [
      {
        id: `base`,
        hex: `#f00`,
        elements: [
          { id: `bg`, hex: `#f00` },
          { id: `mg`, hex: `#f00` },
          { id: `fg`, hex: `#f00` }
        ]
      },
      {
        id: `hover`,
        hex: `#f00`,
        elements: [
          { id: `bg`, hex: `#f00` },
          { id: `mg`, hex: `#f00` },
          { id: `fg`, hex: `#f00` }
        ]
      }
    ]
  }
];

// src/export/channelsToHex.ts
var channelsToHex = (channels) => `#${Object.values(channels).map((channel) => {
  let channelHex = channel.toString(16);
  if (channelHex.length === 1)
    channelHex = 0 + channelHex;
  return channelHex;
}).join(``)}`;
var channelsToHex_default = channelsToHex;

// src/utils/clamp.ts
var clamp = (value, [min, max]) => value > max ? max : value < min ? min : value;
var clamp_default = clamp;

// src/utils/interpolate.ts
var interpolate = ({
  completionRatio = 0.5,
  range: [to, from]
}) => {
  const value = from + completionRatio * (to - from);
  return value;
};
var interpolate_default = interpolate;

// src/utils/wrapAround.ts
var wrapAround = (value, [min, max]) => {
  const range = max - min;
  while (value >= max)
    value -= range;
  while (value < min)
    value += range;
  return value;
};
var wrapAround_default = wrapAround;

// src/import/hueToRelativeChannels.ts
var hueToRelativeChannels_default = (hue) => {
  hue = wrapAround_default(hue, [0, 360]);
  const hueReduced = hue / 60;
  const hueInteger = Math.floor(hueReduced);
  const hueDecimal = hueReduced - hueInteger;
  const x = hueDecimal;
  const y = 1 - hueDecimal;
  switch (hueInteger) {
    case 0:
      return [1, x, 0];
    case 1:
      return [y, 1, 0];
    case 2:
      return [0, 1, x];
    case 3:
      return [0, y, 1];
    case 4:
      return [x, 0, 1];
    case 5:
      return [1, 0, y];
    default:
      throw new Error(`invalid hue served: ${hue}`);
  }
};

// src/solveFor/hueFromChannels.ts
var hueFromChannels = ({ R, G, B }) => {
  let hue = 0;
  if (R > G && G >= B)
    hue = 60 * (0 + (G - B) / (R - B));
  if (G >= R && R > B)
    hue = 60 * (2 - (R - B) / (G - B));
  if (G > B && B >= R)
    hue = 60 * (2 + (B - R) / (G - R));
  if (B >= G && G > R)
    hue = 60 * (4 - (G - R) / (B - R));
  if (B > R && R >= G)
    hue = 60 * (4 + (R - G) / (B - G));
  if (R >= B && B > G)
    hue = 60 * (6 - (B - G) / (R - G));
  return hue;
};
var hueFromChannels_default = hueFromChannels;

// src/solveFor/lumFromChannels.ts
var lumFromChannels = ({ R, G, B }) => {
  const lum = CHANNEL_SPECIFIC_LUM.R * R / 255 + CHANNEL_SPECIFIC_LUM.G * G / 255 + CHANNEL_SPECIFIC_LUM.B * B / 255;
  return lum;
};
var lumFromChannels_default = lumFromChannels;

// src/solveFor/maxSatForHueInFilter.ts
var maxSatForHueInFilter_default = (hue, filter) => {
  let maxSat = 255;
  const hueWrapped = wrapAround_default(hue, [0, 360]);
  for (let a = -1, b = 0; b < filter.length; a++, b++) {
    a = wrapAround_default(a, [0, filter.length]);
    const hueDoubleWrapped = a > b ? wrapAround_default(hueWrapped, [-180, 180]) : void 0;
    const tuningPointA = filter[a];
    const tuningPointB = filter[b];
    const hueA = a > b ? wrapAround_default(tuningPointA.hue, [-180, 180]) : tuningPointA.hue;
    const hueB = tuningPointB.hue;
    if ((hueDoubleWrapped || hueWrapped) >= hueA && (hueDoubleWrapped || hueWrapped) < hueB) {
      let $ = hueDoubleWrapped || hueWrapped;
      $ -= hueA;
      $ /= hueB - hueA;
      $ *= tuningPointB.sat - tuningPointA.sat;
      $ += tuningPointA.sat;
      Math.round($);
      maxSat = $;
    }
  }
  return maxSat;
};

// src/solveFor/satFromChannels.ts
var satFromChannels = ({ R, G, B }) => {
  const sat = Math.max(R, G, B) - Math.min(R, G, B);
  return sat;
};
var satFromChannels_default = satFromChannels;

// src/solveFor/specificLumFromHue.ts
var specificLumFromHue_default = (hue) => {
  const [factorR, factorG, factorB] = hueToRelativeChannels_default(hue);
  const lumR = CHANNEL_SPECIFIC_LUM.R * factorR;
  const lumG = CHANNEL_SPECIFIC_LUM.G * factorG;
  const lumB = CHANNEL_SPECIFIC_LUM.B * factorB;
  const specificLum = lumR + lumG + lumB;
  return specificLum;
};

// src/export/specToChannelsFixLimit.ts
var minChannelsForSaturationFromHue = (hue) => {
  const relativeChannels = hueToRelativeChannels_default(hue);
  const channelSpreader = (trueSaturation) => {
    const makeMinChannel = (idx) => Math.round(relativeChannels[idx] * trueSaturation);
    return {
      R: makeMinChannel(0),
      G: makeMinChannel(1),
      B: makeMinChannel(2)
    };
  };
  return channelSpreader;
};
var channelsFromIlluminationObj = ({
  minChannels,
  trueLuminosity,
  minLum
}) => {
  const { max, round } = Math;
  const maxWhite = 255 - max(...Object.values(minChannels));
  const white = clamp_default(round((trueLuminosity - minLum) * 255), [0, maxWhite]);
  const channels = {
    R: minChannels.R + white,
    G: minChannels.G + white,
    B: minChannels.B + white
  };
  return channels;
};
var specToChannelsFixLimit = ({ hue, sat, lum, prefer = `lum` }, filter = unfiltered) => {
  const minChannelsForSaturation = minChannelsForSaturationFromHue(hue);
  let trueSaturation;
  let trueLuminosity;
  let minChannels;
  let maxChannels;
  let specificLum;
  let minLum = 0;
  let maxLum = 1;
  let maxSat = maxSatForHueInFilter_default(hue, filter);
  switch (prefer) {
    case `sat`:
      trueSaturation = clamp_default(Math.min(sat, maxSat), [0, 255]);
      minChannels = minChannelsForSaturation(trueSaturation);
      maxChannels = {
        R: minChannels.R + 255 - trueSaturation,
        G: minChannels.G + 255 - trueSaturation,
        B: minChannels.B + 255 - trueSaturation
      };
      minLum = lumFromChannels_default(minChannels);
      maxLum = lumFromChannels_default(maxChannels);
      trueLuminosity = clamp_default(lum, [minLum, maxLum]);
      break;
    case `lum`:
      trueLuminosity = clamp_default(lum, [0, 1]);
      specificLum = specificLumFromHue_default(hue);
      maxSat = Math.min(maxSat, Math.round(trueLuminosity <= specificLum ? 255 * (trueLuminosity / specificLum) : 255 * (1 - trueLuminosity) / (1 - specificLum)));
      trueSaturation = Math.min(sat, maxSat);
      minChannels = minChannelsForSaturation(trueSaturation);
      minLum = lumFromChannels_default(minChannels);
      break;
  }
  const channels = channelsFromIlluminationObj({
    minChannels,
    trueLuminosity,
    minLum
  });
  return {
    channels,
    fix: {
      sat: trueSaturation,
      lum: trueLuminosity
    },
    limit: {
      sat: [0, maxSat],
      lum: [prefer === `lum` ? 0 : minLum, maxLum]
    }
  };
};
var specToChannelsFixLimit_default = specToChannelsFixLimit;

// src/export/specToHexFixLimit.ts
var specToHexFixLimit = ({ hue, sat, lum, prefer }, filter) => {
  const { channels, fix, limit } = specToChannelsFixLimit_default({
    hue,
    sat,
    lum,
    prefer
  }, filter);
  const { R, G, B } = channels;
  const hex = channelsToHex_default({ R, G, B });
  return { hex, fix, limit };
};
var specToHexFixLimit_default = specToHexFixLimit;

// src/export/specToHex.ts
var specToHex = ({ hue, sat, lum, prefer }, filter) => {
  const { hex } = specToHexFixLimit_default({ hue, sat, lum, prefer }, filter);
  return hex;
};
var specToHex_default = specToHex;

// src/identify/hue.ts
var rangeNames = [
  { hue: 20, name: `red` },
  { hue: 45, name: `orange` },
  { hue: 61, name: `yellow` },
  { hue: 80, name: `citron` },
  { hue: 100, name: `lime` },
  { hue: 150, name: `green` },
  { hue: 180, name: `teal` },
  { hue: 200, name: `cyan` },
  { hue: 240, name: `blue` },
  { hue: 270, name: `indigo` },
  { hue: 300, name: `violet` },
  { hue: 330, name: `magenta` },
  { hue: 350, name: `pink` }
];
var identifyHue = (hue) => {
  const hueWrapped = wrapAround_default(hue, [0, 360]);
  const { name } = rangeNames.find(({ hue: hue2 }) => hueWrapped >= hue2) || rangeNames[0];
  return name;
};

// src/import/channelsToSpec.ts
var channelsToSpec = ({ R, G, B }) => {
  const hue = hueFromChannels_default({ R, G, B });
  const sat = satFromChannels_default({ R, G, B });
  const lum = lumFromChannels_default({ R, G, B });
  return { hue, sat, lum };
};
var channelsToSpec_default = channelsToSpec;

// src/import/normalizeHex.ts
var BASE_16_CHAR_SET = `[a-fA-F0-9]+`;
var miniHexToHex = (miniHex) => {
  const miniHexArray = miniHex.split(``);
  const hexTemplate = [0, 0, 1, 1, 2, 2];
  return hexTemplate.map((idx) => miniHexArray[idx]).join(``);
};
var normalizeHex = (maybeHex) => {
  const hex = maybeHex.replace(/^#/, ``);
  const hexIsCorrectLength = hex.length === 6 || hex.length === 3;
  const hexIsCorrectCharSet = hex.match(new RegExp(`^${BASE_16_CHAR_SET}$`)) !== null;
  const hexIsValid = hexIsCorrectLength && hexIsCorrectCharSet;
  if (!hexIsValid) {
    throw new Error(`${maybeHex} is not a valid hex code`);
  }
  if (hex.length === 3) {
    return miniHexToHex(hex);
  }
  return hex;
};
var normalizeHex_default = normalizeHex;

// src/import/hexToChannels.ts
var hexToChannels_default = (maybeHex) => {
  const hex = normalizeHex_default(maybeHex);
  const getHexcodeChannel = (nameOfChannel) => {
    switch (nameOfChannel) {
      case `r`:
        return hex.slice(0, 2);
      case `g`:
        return hex.slice(2, 4);
      case `b`:
        return hex.slice(4, 6);
      default:
        throw new Error(`strange channel name`);
    }
  };
  const rBase10 = parseInt(getHexcodeChannel(`r`), 16);
  const gBase10 = parseInt(getHexcodeChannel(`g`), 16);
  const bBase10 = parseInt(getHexcodeChannel(`b`), 16);
  return {
    R: rBase10,
    G: gBase10,
    B: bBase10
  };
};

// src/import/hexToSpec.ts
var hexToSpec = (hex) => {
  const { R, G, B } = hexToChannels_default(hex);
  const { hue, sat, lum } = channelsToSpec_default({ R, G, B });
  return { hue, sat, lum };
};
var hexToSpec_default = hexToSpec;

// src/mixers/contrast.ts
var contrast = (color, value) => {
  const { lum } = color;
  switch (value) {
    case 0:
      return { ...color, lum: lum > 0.666 ? 0 : 1 };
    case 1:
      return { ...color, lum: lum > 0.666 ? 0.05 : 0.95 };
    case 2:
      if (lum > 0.75) {
        return { ...color, lum: lum / 2 };
      } else if (lum < 0.25) {
        return { ...color, lum: lum + (1 - lum) / 2 };
      }
      return { ...color, lum: lum > 0.666 ? 1 : 0 };
  }
};
var contrast_default = contrast;

// src/mixers/hue.ts
var setHue = (color, value) => {
  const newHue = value instanceof Function ? value(color.hue) : value;
  return { ...color, hue: wrapAround_default(newHue, [0, 360]) };
};
var trine = (color, value) => setHue(color, (hue) => hue + value * 120);
var tetra = (color, value) => setHue(color, (hue) => hue + value * 90);
var split = (color, value) => setHue(color, (hue) => hue + value * 150);

// src/mixers/lum.ts
var setLum = (color, value) => {
  const newLum = value instanceof Function ? value(color.lum) : value;
  return { ...color, lum: clamp_default(newLum, [0, 1]) };
};
var tint = (color, value) => setLum(color, (lum) => (lum * 100 + value) / 100);
var shade = (color, value) => setLum(color, (lum) => (lum * 100 - value) / 100);

// src/mixers/sat.ts
var setSat = (color, value) => {
  const newSat = value instanceof Function ? value(color.sat) : value;
  return { ...color, sat: clamp_default(newSat, [0, 255]) };
};
var amp = (color, value) => setSat(color, (sat) => sat + value);
var mute = (color, value) => setSat(color, (sat) => sat - value);

// src/mixers/index.ts
var mixers = {
  hex: (color, value) => ({ ...color, ...hexToSpec_default(value) }),
  spec: (_, value) => ({ ...value }),
  hue: setHue,
  sat: setSat,
  lum: setLum,
  fix: (color, prefer) => ({
    ...color,
    prefer,
    ...specToHexFixLimit_default({ ...color, prefer }).fix
  }),
  prefer: (color, prefer) => ({ ...color, prefer }),
  amp,
  contrast: contrast_default,
  mute,
  tint,
  shade,
  split,
  tetra,
  trine
};
var mixers_default = mixers;

// src/scheme/export.ts
var isInteractivePalette = (palette) => !Object.values(palette.attributes)[0].dry;
var indent = (indent2 = 1, text) => ` `.repeat(indent2 * 2) + text;
var openCssRule = (gen = 0, ...selectors) => selectors.length > 1 ? selectors.reduce((acc, selector, idx) => {
  const maybeComma = idx === 0 ? `` : `,`;
  return `
` + indent(gen, selector) + maybeComma + acc;
}, ``) + ` {
` : `${indent(gen, `${selectors[0]} {
`)}`;
var closeCssRule = (gen = 0) => `${indent(gen, `}
`)}`;
var createCssProperty = (key, value, gen = 0) => indent(1 + gen, `${key}: ${value};
`);
var paletteToScssDeclarationStatic = (palette, generation) => {
  let scssDeclaration = ``;
  for (const [attribute, { dry: hex }] of Object.entries(palette.attributes)) {
    scssDeclaration += createCssProperty(attribute, hex, generation);
  }
  return scssDeclaration;
};
var paletteToScssDeclarationInteractive = (palette, gen) => {
  let declaration = ``;
  const stateDeclarations = {
    hover: openCssRule(gen + 1, `&:hover`, `&:focus`, `&:focus-within`),
    active: openCssRule(gen + 1, `&:active`, `&.active`),
    disabled: openCssRule(gen + 1, `&:disabled`, `&.disabled`)
  };
  for (const [key, { base, hover, active, disabled }] of Object.entries(palette.attributes)) {
    declaration += createCssProperty(key, base.dry, gen);
    stateDeclarations.hover += createCssProperty(key, hover.dry, gen + 1);
    stateDeclarations.active += createCssProperty(key, active.dry, gen + 1);
    stateDeclarations.disabled += createCssProperty(key, disabled.dry, gen + 1);
  }
  stateDeclarations.hover += closeCssRule(gen + 1);
  stateDeclarations.active += closeCssRule(gen + 1);
  stateDeclarations.disabled += closeCssRule(gen + 1);
  declaration += stateDeclarations.hover;
  declaration += stateDeclarations.active;
  declaration += stateDeclarations.disabled;
  return declaration;
};
var paletteToScssDeclaration = (palette, generation) => isInteractivePalette(palette) ? paletteToScssDeclarationInteractive(palette, generation) : paletteToScssDeclarationStatic(palette, generation);
var nestChildRules = (palette, generation) => {
  let nestedRules = ``;
  if (palette.children) {
    for (const child of Object.entries(palette.children)) {
      const [selector, childPalette] = child;
      nestedRules += paletteToScssRule(selector, childPalette, generation + 1);
    }
  }
  return nestedRules;
};
var paletteToScssRule = (selector, palette, generation = 0) => {
  let scssBlock = openCssRule(generation, selector);
  scssBlock += paletteToScssDeclaration(palette, generation);
  scssBlock += nestChildRules(palette, generation);
  scssBlock += closeCssRule(generation);
  return scssBlock;
};
var schemeToScssRule = (selector, scheme) => {
  const palette = mixPalette(scheme);
  const scss = paletteToScssRule(selector, palette);
  return scss;
};

// src/constants/spec.ts
var defaultSpec = {
  hue: 0,
  lum: 0,
  sat: 0,
  prefer: `lum`
};

// src/utils/mapObject.ts
var mapObject = (obj, fn) => {
  const newObj = {};
  const entries = Object.entries(obj);
  entries.forEach(([key, val]) => {
    newObj[key] = fn(val, key);
  });
  return newObj;
};
var mapObject_default = mapObject;

// src/scheme/import.ts
var isInteractiveSwatch = (swatch) => {
  if (swatch === void 0)
    return false;
  return Boolean(swatch.base);
};
var mixNewSpec = (spec, mix) => mix.reduce((currentColor, [name, value]) => {
  const mixer = mixers_default[name];
  return mixer(currentColor, value);
}, spec);
var mixNewSwatch = (spec, mix, filter) => {
  const wet = mixNewSpec(spec, mix);
  const dry = specToHex_default(wet, filter);
  return { wet, dry };
};
var mixPaletteStatic = (scheme, parent) => {
  const filter = scheme.filter || parent?.filter || unfiltered;
  const rootSpec = mixNewSpec(defaultSpec, scheme.root || []);
  const paletteAttributes = mapObject_default(scheme.attributes, (mix, key) => {
    const parentAttribute = parent?.attributes[key];
    const startingPoint = isInteractiveSwatch(parentAttribute) ? parentAttribute.base.wet : parentAttribute?.wet || rootSpec;
    console.log(parentAttribute);
    console.log(startingPoint);
    return mixNewSwatch(startingPoint, mix, filter);
  });
  const palette = {
    attributes: paletteAttributes
  };
  if (scheme.children) {
    palette.children = mapObject_default(scheme.children, (child) => mixPalette(child, { filter, attributes: paletteAttributes }));
  }
  return palette;
};
var mixPaletteInteractive = (scheme, parent) => {
  const filter = scheme.filter || parent?.filter || unfiltered;
  const rootSpec = mixNewSpec(defaultSpec, scheme.root || []);
  const baseSwatches = mapObject_default(scheme.attributes, (attribute, key) => {
    const parentAttribute = parent?.attributes[key];
    const startingPoint = isInteractiveSwatch(parentAttribute) ? parentAttribute.base.wet : parentAttribute?.wet || rootSpec;
    return mixNewSwatch(startingPoint, attribute.base, filter);
  });
  const paletteAttributes = mapObject_default(scheme.attributes, (attribute, attributeKey) => mapObject_default(attribute, (state, stateKey) => {
    if (stateKey === `base`) {
      return baseSwatches[attributeKey];
    }
    return mixNewSwatch(baseSwatches[attributeKey].wet, state, filter);
  }));
  const palette = {
    attributes: paletteAttributes
  };
  if (scheme.children) {
    palette.children = mapObject_default(scheme.children, (child) => mixPalette(child, { filter, attributes: paletteAttributes }));
  }
  return palette;
};
var isInteractiveScheme = (scheme) => !Array.isArray(Object.values(scheme.attributes)[0]);
var mixPalette = (scheme, parent) => isInteractiveScheme(scheme) ? mixPaletteInteractive(scheme, parent) : mixPaletteStatic(scheme, parent);
export {
  CHANNEL_SPECIFIC_LUM,
  CMYK,
  HUE_STRUCTURES,
  UI,
  channelsToSpec_default as channelsToSpec,
  clamp_default as clamp,
  hexToChannels_default as hexToChannels,
  hexToSpec_default as hexToSpec,
  hueFromChannels_default as hueFromChannels,
  hueToRelativeChannels_default as hueToRelativeChannels,
  identifyHue,
  interpolate_default as interpolate,
  isInteractivePalette,
  isInteractiveScheme,
  isInteractiveSwatch,
  lumFromChannels_default as lumFromChannels,
  maxSatForHueInFilter_default as maxSatForHueInFilter,
  mixNewSpec,
  mixNewSwatch,
  mixPalette,
  mixPaletteInteractive,
  mixPaletteStatic,
  nestChildRules,
  normalizeHex_default as normalizeHex,
  paletteToScssDeclaration,
  paletteToScssDeclarationInteractive,
  paletteToScssDeclarationStatic,
  paletteToScssRule,
  palettes,
  satFromChannels_default as satFromChannels,
  schemeToScssRule,
  specToHex_default as specToHex,
  specToHexFixLimit_default as specToHexFixLimit,
  specificLumFromHue_default as specificLumFromHue,
  trifactory,
  unfiltered,
  wrapAround_default as wrapAround
};
//# sourceMappingURL=index.js.map
