var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key2 of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// ../node_modules/fp-ts/lib/function.js
var require_function = __commonJS({
  "../node_modules/fp-ts/lib/function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
    var getBooleanAlgebra = function(B) {
      return function() {
        return {
          meet: function(x, y) {
            return function(a) {
              return B.meet(x(a), y(a));
            };
          },
          join: function(x, y) {
            return function(a) {
              return B.join(x(a), y(a));
            };
          },
          zero: function() {
            return B.zero;
          },
          one: function() {
            return B.one;
          },
          implies: function(x, y) {
            return function(a) {
              return B.implies(x(a), y(a));
            };
          },
          not: function(x) {
            return function(a) {
              return B.not(x(a));
            };
          }
        };
      };
    };
    exports.getBooleanAlgebra = getBooleanAlgebra;
    var getSemigroup = function(S) {
      return function() {
        return {
          concat: function(f, g) {
            return function(a) {
              return S.concat(f(a), g(a));
            };
          }
        };
      };
    };
    exports.getSemigroup = getSemigroup;
    var getMonoid = function(M) {
      var getSemigroupM = exports.getSemigroup(M);
      return function() {
        return {
          concat: getSemigroupM().concat,
          empty: function() {
            return M.empty;
          }
        };
      };
    };
    exports.getMonoid = getMonoid;
    var getSemiring = function(S) {
      return {
        add: function(f, g) {
          return function(x) {
            return S.add(f(x), g(x));
          };
        },
        zero: function() {
          return S.zero;
        },
        mul: function(f, g) {
          return function(x) {
            return S.mul(f(x), g(x));
          };
        },
        one: function() {
          return S.one;
        }
      };
    };
    exports.getSemiring = getSemiring;
    var getRing = function(R) {
      var S = exports.getSemiring(R);
      return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function(f, g) {
          return function(x) {
            return R.sub(f(x), g(x));
          };
        }
      };
    };
    exports.getRing = getRing;
    var apply2 = function(a) {
      return function(f) {
        return f(a);
      };
    };
    exports.apply = apply2;
    function identity(a) {
      return a;
    }
    exports.identity = identity;
    exports.unsafeCoerce = identity;
    function constant(a) {
      return function() {
        return a;
      };
    }
    exports.constant = constant;
    exports.constTrue = /* @__PURE__ */ constant(true);
    exports.constFalse = /* @__PURE__ */ constant(false);
    exports.constNull = /* @__PURE__ */ constant(null);
    exports.constUndefined = /* @__PURE__ */ constant(void 0);
    exports.constVoid = exports.constUndefined;
    function flip(f) {
      return function(b, a) {
        return f(a, b);
      };
    }
    exports.flip = flip;
    function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
      switch (arguments.length) {
        case 1:
          return ab;
        case 2:
          return function() {
            return bc(ab.apply(this, arguments));
          };
        case 3:
          return function() {
            return cd(bc(ab.apply(this, arguments)));
          };
        case 4:
          return function() {
            return de(cd(bc(ab.apply(this, arguments))));
          };
        case 5:
          return function() {
            return ef(de(cd(bc(ab.apply(this, arguments)))));
          };
        case 6:
          return function() {
            return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
          };
        case 7:
          return function() {
            return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
          };
        case 8:
          return function() {
            return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
          };
        case 9:
          return function() {
            return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
          };
      }
      return;
    }
    exports.flow = flow;
    function tuple() {
      var t = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
      }
      return t;
    }
    exports.tuple = tuple;
    function increment(n) {
      return n + 1;
    }
    exports.increment = increment;
    function decrement(n) {
      return n - 1;
    }
    exports.decrement = decrement;
    function absurd(_) {
      throw new Error("Called `absurd` function which should be uncallable");
    }
    exports.absurd = absurd;
    function tupled(f) {
      return function(a) {
        return f.apply(void 0, a);
      };
    }
    exports.tupled = tupled;
    function untupled(f) {
      return function() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          a[_i] = arguments[_i];
        }
        return f(a);
      };
    }
    exports.untupled = untupled;
    function pipe3(a, ab, bc, cd, de, ef, fg, gh, hi) {
      switch (arguments.length) {
        case 1:
          return a;
        case 2:
          return ab(a);
        case 3:
          return bc(ab(a));
        case 4:
          return cd(bc(ab(a)));
        case 5:
          return de(cd(bc(ab(a))));
        case 6:
          return ef(de(cd(bc(ab(a)))));
        case 7:
          return fg(ef(de(cd(bc(ab(a))))));
        case 8:
          return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
          return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
          var ret = arguments[0];
          for (var i = 1; i < arguments.length; i++) {
            ret = arguments[i](ret);
          }
          return ret;
      }
    }
    exports.pipe = pipe3;
    exports.hole = absurd;
    var SK = function(_, b) {
      return b;
    };
    exports.SK = SK;
    function not(predicate) {
      return function(a) {
        return !predicate(a);
      };
    }
    exports.not = not;
    var getEndomorphismMonoid = function() {
      return {
        concat: function(first, second) {
          return flow(first, second);
        },
        empty: identity
      };
    };
    exports.getEndomorphismMonoid = getEndomorphismMonoid;
  }
});

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

// src/scheme/index.ts
var import_function2 = __toModule(require_function());

// src/constants/spec.ts
var defaultSpec = {
  hue: 0,
  lum: 0,
  sat: 0,
  prefer: `lum`
};

// src/mixers/lum.ts
var import_function = __toModule(require_function());
var clampInto = ([min, max]) => (value) => value > max ? max : value < min ? min : value;
var apply = (nextVersionOfThing) => (originalThing) => nextVersionOfThing instanceof Function ? nextVersionOfThing(originalThing) : nextVersionOfThing;
var setLum = (newLum) => (currentColor) => ({
  ...currentColor,
  lum: (0, import_function.pipe)(currentColor.lum, apply(newLum), clampInto([0, 1]))
});
var shade = (shadeAmount) => (color) => setLum((lum) => (lum * 100 - shadeAmount) / 100)(color);

// src/scheme/index.ts
var CSS_PSEUDO_CLASSES = [
  `:active`,
  `:checked`,
  `:disabled`,
  `:enabled`,
  `:focus`,
  `:hover`,
  `:indeterminate`,
  `:visited`
];
var isCssPseudoClass = (s) => CSS_PSEUDO_CLASSES.includes(s);
var CSS_COLOR_PROPERTY_KEYS = [
  `background-color`,
  `background`,
  `border-bottom-color`,
  `border-color`,
  `border-left-color`,
  `border-right-color`,
  `border-top-color`,
  `border`,
  `box-shadow`,
  `caret-color`,
  `color`,
  `column-rule-color`,
  `column-rule`,
  `filter`,
  `opacity`,
  `outline-color`,
  `outline`,
  `text-decoration-color`,
  `text-decoration`,
  `text-shadow`
];
var isCssColorPropertyKey = (input) => typeof input === `string` && (CSS_COLOR_PROPERTY_KEYS.includes(input) || input.startsWith(`--`));
var isString = (input) => typeof input === `string`;
var isUndefined = (input) => typeof input === `undefined`;
var isArrayWhereEveryElement = (isType) => (input) => Array.isArray(input) && input.every((item) => isType(item));
var content = (isType) => (input) => isType(input) || isArrayWhereEveryElement(isType)(input);
var maybeIsOrContainsOnly = (isType) => (input) => isUndefined(input) || content(isType)(input);
var isTransformer = (validate) => (sample) => {
  const sampleIsValid = validate(sample);
  if (!sampleIsValid) {
    throw new Error(`Invalid test case: JSON.stringify(${sample})`);
  }
  return (input) => {
    if (typeof input !== `function`)
      return false;
    const testResult = input(sample);
    return validate(testResult);
  };
};
var isFilterPoint = (input) => typeof input === `object` && typeof input.hue === `number` && typeof input.sat === `number`;
var isFilter = (input) => isArrayWhereEveryElement(isFilterPoint)(input);
var maybe = (validate) => (input) => isUndefined(input) || validate(input);
var isLuumSpec = (input) => typeof input === `object` && input !== null && typeof input.hue === `number` && typeof input.sat === `number` && typeof input.lum === `number` && [`sat`, `lum`].includes(input.prefer);
var isLuumSpecTransformer = isTransformer(isLuumSpec)(defaultSpec);
var isLuumCssAttribute = (input) => Array.isArray(input) && input.length === 2 && content(isCssColorPropertyKey)(input[0]) && content(isLuumSpecTransformer)(input[1]);
var isLuumScssPseudoClassRule = (input) => input instanceof Array && input.length === 2 && content(isCssPseudoClass)(input[0]) && content(isLuumCssAttribute)(input[1]);
var isLuumScssNestedRule = (input) => input instanceof Array && input.length === 2 && content(isString)(input[0]) && content(isLuumCssAttribute)(input[1]);
var key = (k) => (obj) => obj[k];
var isLuumCssRule = (input) => typeof input === `object` && input !== null && isLuumSpec(input.root) && content(isLuumCssAttribute)(key(`attributes`)(input)) && maybe(content(isString))(key(`rootSelectors`)(input)) && maybe(isFilter)(key(`filter`)(input));
var isLuumScssRule = (input) => isLuumCssRule(input) && maybe(content(isLuumScssPseudoClassRule))(key(`states`)(input)) && maybe(content(isLuumScssNestedRule))(key(`children`)(input));
var RED = {
  hue: 0,
  sat: 255,
  lum: 50,
  prefer: `sat`
};
var PAINT_MY_WAGON_RED = {
  rootSelectors: [`.wagon`],
  root: RED,
  attributes: [`background-color`, shade(5)],
  states: [
    [
      [`:hover`, `:focus`],
      [`background-color`, shade(10)]
    ],
    [`:active`, [`background-color`, shade(15)]]
  ]
};
var eachArrayElement = (isType) => (input) => isType(input) ? [input] : Array.isArray(input) ? input.filter(isType) : [];
var LF = `
`;
var join = (separator) => (a) => a.join(separator);
var map = (f) => (a) => a.map(f);
var luumToCss = (rule) => {
  const {
    attributes: oneOrManyAttributes,
    root,
    rootSelectors: maybeOneOrManyRootSelectors,
    filter: maybeFilter
  } = rule;
  const rootSelectors = (0, import_function2.pipe)(maybeOneOrManyRootSelectors, eachArrayElement(isString), join(`, ` + LF), (s) => s ? s + ` {` + LF : ``);
  const attributes = (0, import_function2.pipe)(oneOrManyAttributes, eachArrayElement(isLuumCssAttribute), map(([oneOrManyKeys, oneOrManyTransformers]) => {
    const transformers = eachArrayElement(isLuumSpecTransformer)(oneOrManyTransformers);
    const transformedSpec = transformers.reduce((acc, transformer) => transformer(acc), root);
    const hex = specToHex_default(transformedSpec, maybeFilter);
    return (0, import_function2.pipe)(oneOrManyKeys, eachArrayElement(isCssColorPropertyKey), map((key2) => `${key2}: ${hex}`), join(`; ` + LF));
  }), join(`; ` + LF));
  return rootSelectors ? join(LF)([rootSelectors, attributes, `}`]) : attributes;
};
var luumToScss = (rule) => {
  const {
    rootSelectors: maybeOneOrManyRootSelectors,
    root,
    attributes: oneOrManyAttributes,
    filter,
    states: maybeOneOrManyStates,
    children: maybeOneOrManyChildren
  } = rule;
  const rootSelectors = (0, import_function2.pipe)(maybeOneOrManyRootSelectors, eachArrayElement(isString), join(`, ` + LF));
  return ``;
};
export {
  CHANNEL_SPECIFIC_LUM,
  CMYK,
  CSS_COLOR_PROPERTY_KEYS,
  CSS_PSEUDO_CLASSES,
  HUE_STRUCTURES,
  PAINT_MY_WAGON_RED,
  RED,
  UI,
  channelsToSpec_default as channelsToSpec,
  clamp_default as clamp,
  content,
  eachArrayElement,
  hexToChannels_default as hexToChannels,
  hexToSpec_default as hexToSpec,
  hueFromChannels_default as hueFromChannels,
  hueToRelativeChannels_default as hueToRelativeChannels,
  identifyHue,
  interpolate_default as interpolate,
  isArrayWhereEveryElement,
  isCssColorPropertyKey,
  isCssPseudoClass,
  isFilter,
  isFilterPoint,
  isLuumCssAttribute,
  isLuumCssRule,
  isLuumScssNestedRule,
  isLuumScssPseudoClassRule,
  isLuumScssRule,
  isLuumSpec,
  isLuumSpecTransformer,
  isString,
  isTransformer,
  isUndefined,
  key,
  lumFromChannels_default as lumFromChannels,
  luumToCss,
  luumToScss,
  maxSatForHueInFilter_default as maxSatForHueInFilter,
  maybe,
  maybeIsOrContainsOnly,
  normalizeHex_default as normalizeHex,
  palettes,
  satFromChannels_default as satFromChannels,
  specToHex_default as specToHex,
  specToHexFixLimit_default as specToHexFixLimit,
  specificLumFromHue_default as specificLumFromHue,
  trifactory,
  unfiltered,
  wrapAround_default as wrapAround
};
//# sourceMappingURL=index.js.map
