export declare const UI: {
    state: {
        hover: {};
        active: {};
        disabled: {};
    };
    bg: {
        shade: number;
        state: {
            base: {};
            hover: {
                shade: number;
            };
            active: {
                shade: number;
            };
            disabled: {
                shade: number;
            };
        };
    };
    mg: {
        shade: number;
    };
    fg: {
        contrast: string;
        state: {
            hover: {
                contrast: string;
            };
            active: {
                contrast: string;
            };
            disabled: {
                shade: number;
            };
        };
    };
};
export declare const trifactory: {
    PaletteModule: {
        contextColor: ({
            resetColor: string;
            shade?: undefined;
        } | {
            shade: number;
            resetColor?: undefined;
        })[];
        variables: {
            bg: never[];
            mg: ({
                resetColor: number;
                shade?: undefined;
            } | {
                shade: number;
                resetColor?: undefined;
            })[];
            fg: {
                contrast: string;
            }[];
        };
        children: {
            Control: {
                states: {
                    base: {};
                    hover: {
                        tint: number;
                    }[];
                    active: {
                        shade: number;
                    }[];
                };
                variables: {
                    bg: {
                        shade: number;
                    }[];
                    mg: {
                        shade: number;
                    }[];
                    fg: {
                        states: {
                            base: ({
                                shade: number;
                                contrast?: undefined;
                            } | {
                                contrast: string;
                                shade?: undefined;
                            })[];
                            hover: ({
                                shade: number;
                                contrast?: undefined;
                            } | {
                                contrast: string;
                                shade?: undefined;
                            })[];
                            active: ({
                                shade: number;
                                contrast?: undefined;
                            } | {
                                contrast: string;
                                shade?: undefined;
                            })[];
                        };
                    };
                };
            };
        };
    };
};
export declare const palettes: {
    id: string;
    hex: string;
    states: {
        id: string;
        hex: string;
        elements: {
            id: string;
            hex: string;
        }[];
    }[];
}[];
//# sourceMappingURL=schemes.d.ts.map