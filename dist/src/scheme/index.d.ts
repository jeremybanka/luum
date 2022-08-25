import type { Filter, LuumSpec, FilterPoint } from "~";
import type { Transformer } from "~/mixers/lum";
export declare const CSS_PSEUDO_CLASSES: readonly [":active", ":checked", ":disabled", ":enabled", ":focus", ":hover", ":indeterminate", ":visited"];
export declare type CssPseudoClass = typeof CSS_PSEUDO_CLASSES[number];
export declare const isCssPseudoClass: (s: unknown) => s is ":active" | ":checked" | ":disabled" | ":enabled" | ":focus" | ":hover" | ":indeterminate" | ":visited";
export declare const CSS_COLOR_PROPERTY_KEYS: readonly ["background-color", "background", "border-bottom-color", "border-color", "border-left-color", "border-right-color", "border-top-color", "border", "box-shadow", "caret-color", "color", "column-rule-color", "column-rule", "filter", "opacity", "outline-color", "outline", "text-decoration-color", "text-decoration", "text-shadow"];
export declare type CssColorPropertyKey = typeof CSS_COLOR_PROPERTY_KEYS[number] | `--${string}`;
export declare const isCssColorPropertyKey: (input: unknown) => input is CssColorPropertyKey;
export declare type Validator<T> = (input: unknown) => input is T;
export declare const isString: (input: unknown) => input is string;
export declare const isUndefined: (input: unknown) => input is undefined;
export declare const isArrayWhereEveryElement: <T>(isType: Validator<T>) => (input: unknown) => input is T[];
export declare const content: <T>(isType: Validator<T>) => (input: unknown) => input is T | T[];
export declare const maybeIsOrContainsOnly: <T>(isType: Validator<T>) => (input: unknown) => input is T | T[] | undefined;
export declare type OneOrMany<T> = T | T[];
export declare const isTransformer: <T>(validate: Validator<T>) => (sample: T) => Validator<Transformer<T>>;
export declare const isFilterPoint: (input: unknown) => input is FilterPoint;
export declare const isFilter: (input: unknown) => input is Filter;
export declare const maybe: <T>(validate: Validator<T>) => (input: unknown) => input is T | undefined;
export declare const isLuumSpec: (input: unknown) => input is LuumSpec;
export declare const isLuumSpecTransformer: Validator<Transformer<LuumSpec>>;
export declare type LuumCssAttribute = [
    keys: OneOrMany<CssColorPropertyKey>,
    transformers: OneOrMany<Transformer<LuumSpec>>
];
export declare const isLuumCssAttribute: (input: unknown) => input is LuumCssAttribute;
export declare type LuumScssPseudoClassRule = [
    selectors: OneOrMany<CssPseudoClass>,
    attributes: OneOrMany<LuumCssAttribute>
];
export declare const isLuumScssPseudoClassRule: (input: unknown) => input is LuumScssPseudoClassRule;
export declare type LuumScssNestedRule = [
    selectors: OneOrMany<string>,
    attributes: OneOrMany<LuumCssAttribute>
];
export declare const isLuumScssNestedRule: (input: unknown) => input is LuumScssNestedRule;
export declare type LuumCssRule = {
    rootSelectors?: OneOrMany<string>;
    root: LuumSpec;
    attributes: OneOrMany<LuumCssAttribute>;
    filter?: Filter;
};
export declare const key: <T = any>(k: keyof T) => (obj: Exclude<object, null>) => unknown;
export declare const isLuumCssRule: (input: unknown) => input is LuumCssRule;
export declare type LuumScssRule = LuumCssRule & {
    states?: OneOrMany<LuumScssPseudoClassRule>;
    children?: OneOrMany<LuumScssNestedRule>;
};
export declare const isLuumScssRule: (input: unknown) => input is LuumScssRule;
export declare const RED: LuumSpec;
export declare const PAINT_MY_WAGON_RED: LuumScssRule;
export declare const eachArrayElement: <T>(isType: Validator<T>) => (input: unknown) => T[];
export declare const luumToCss: (rule: LuumCssRule) => string;
export declare const luumToScss: (rule: LuumScssRule) => string;
//# sourceMappingURL=index.d.ts.map