"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palettes = exports.trifactory = exports.UI = void 0;
exports.UI = {
    state: {
        hover: {},
        active: {},
        disabled: {},
    },
    bg: {
        shade: 24,
        state: {
            base: {},
            hover: { shade: 18 },
            active: { shade: 32 },
            disabled: { shade: 32 },
        },
    },
    mg: {
        shade: 48,
    },
    fg: {
        contrast: `soft`,
        state: {
            hover: { contrast: `harden` },
            active: { contrast: `harden` },
            disabled: { shade: 20 },
        },
    },
};
// Example:
/* ```
[
  [<component-name>, {
    'rootColor': [],
    'variables': [],
    'children': [<recurse>]
  }],
  []
]

// transforms: shade, tint, contrast, sat, lum, hue

```
*/
exports.trifactory = {
    PaletteModule: {
        contextColor: [{ resetColor: `#fee` }, { shade: 20 }],
        /*
        // NOTE: These state changes are localized to the current
        // object, and have no impact on children.
        states: {
          hover: [{tint: 10}, {shade: 22}],
        },
        */
        // NOTE: these variables get included into each child
        // as ex-<variable-name>
        variables: {
            bg: [],
            mg: [{ resetColor: 1 }, { shade: 10 }],
            fg: [{ contrast: `soft` }],
        },
        children: {
            Control: {
                // NOTE: All these colors start with the contextColor
                // and not with the ex-color from parent
                states: {
                    base: {},
                    hover: [{ tint: 12 }],
                    active: [{ shade: 18 }],
                },
                variables: {
                    bg: [{ shade: 24 }],
                    mg: [{ shade: 48 }],
                    fg: {
                        // NOTE: All these colors start with a context of the
                        // existing state of the parent.
                        states: {
                            base: [{ shade: 24 }, { contrast: `soft` }],
                            hover: [{ shade: 24 }, { contrast: `soft` }],
                            active: [{ shade: 24 }, { contrast: `hard` }],
                        },
                    },
                },
            },
        },
    },
};
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
exports.palettes = [
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
                    { id: `fg`, hex: `#f00` },
                ],
            },
            {
                id: `hover`,
                hex: `#f00`,
                elements: [
                    { id: `bg`, hex: `#f00` },
                    { id: `mg`, hex: `#f00` },
                    { id: `fg`, hex: `#f00` },
                ],
            },
        ],
    },
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudHMvc2NoZW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLEVBQUUsR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtTQUN4QjtLQUNGO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELEVBQUUsRUFBRTtRQUNGLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7WUFDN0IsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUM5QixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFBO0FBRUQsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7O0VBYUU7QUFFVyxRQUFBLFVBQVUsR0FBRztJQUN4QixhQUFhLEVBQUU7UUFDYixZQUFZLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyRDs7Ozs7O1VBTUU7UUFDRixxREFBcUQ7UUFDckQsd0JBQXdCO1FBQ3hCLFNBQVMsRUFBRTtZQUNULEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDdEMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscURBQXFEO2dCQUNyRCx3Q0FBd0M7Z0JBQ3hDLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbkIsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQ25CLEVBQUUsRUFBRTt3QkFDRixxREFBcUQ7d0JBQ3JELGdDQUFnQzt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDOzRCQUMzQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQzs0QkFDNUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7eUJBQzlDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQTtBQUVELDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekMsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUVoRCwwREFBMEQ7QUFDMUQsOENBQThDO0FBRTlDLE1BQU07QUFDTix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixPQUFPO0FBRVA7O0VBRUU7QUFFRixXQUFXO0FBQ0UsUUFBQSxRQUFRLEdBQUc7SUFDdEI7UUFDRSxFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsTUFBTTtRQUNYLE1BQU0sRUFBRTtZQUNOO2dCQUNFLEVBQUUsRUFBRSxNQUFNO2dCQUNWLEdBQUcsRUFBRSxNQUFNO2dCQUNYLFFBQVEsRUFBRTtvQkFDUixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtvQkFDekIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7b0JBQ3pCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO2lCQUMxQjthQUNGO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO29CQUN6QixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtvQkFDekIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7aUJBQzFCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVSSA9IHtcbiAgc3RhdGU6IHtcbiAgICBob3Zlcjoge30sXG4gICAgYWN0aXZlOiB7fSxcbiAgICBkaXNhYmxlZDoge30sXG4gIH0sXG4gIGJnOiB7XG4gICAgc2hhZGU6IDI0LFxuICAgIHN0YXRlOiB7XG4gICAgICBiYXNlOiB7fSxcbiAgICAgIGhvdmVyOiB7IHNoYWRlOiAxOCB9LFxuICAgICAgYWN0aXZlOiB7IHNoYWRlOiAzMiB9LFxuICAgICAgZGlzYWJsZWQ6IHsgc2hhZGU6IDMyIH0sXG4gICAgfSxcbiAgfSxcbiAgbWc6IHtcbiAgICBzaGFkZTogNDgsXG4gIH0sXG4gIGZnOiB7XG4gICAgY29udHJhc3Q6IGBzb2Z0YCxcbiAgICBzdGF0ZToge1xuICAgICAgaG92ZXI6IHsgY29udHJhc3Q6IGBoYXJkZW5gIH0sXG4gICAgICBhY3RpdmU6IHsgY29udHJhc3Q6IGBoYXJkZW5gIH0sXG4gICAgICBkaXNhYmxlZDogeyBzaGFkZTogMjAgfSxcbiAgICB9LFxuICB9LFxufVxuXG4vLyBFeGFtcGxlOlxuLyogYGBgXG5bXG4gIFs8Y29tcG9uZW50LW5hbWU+LCB7XG4gICAgJ3Jvb3RDb2xvcic6IFtdLFxuICAgICd2YXJpYWJsZXMnOiBbXSxcbiAgICAnY2hpbGRyZW4nOiBbPHJlY3Vyc2U+XVxuICB9XSxcbiAgW11cbl1cblxuLy8gdHJhbnNmb3Jtczogc2hhZGUsIHRpbnQsIGNvbnRyYXN0LCBzYXQsIGx1bSwgaHVlXG5cbmBgYFxuKi9cblxuZXhwb3J0IGNvbnN0IHRyaWZhY3RvcnkgPSB7XG4gIFBhbGV0dGVNb2R1bGU6IHtcbiAgICBjb250ZXh0Q29sb3I6IFt7IHJlc2V0Q29sb3I6IGAjZmVlYCB9LCB7IHNoYWRlOiAyMCB9XSxcbiAgICAvKlxuICAgIC8vIE5PVEU6IFRoZXNlIHN0YXRlIGNoYW5nZXMgYXJlIGxvY2FsaXplZCB0byB0aGUgY3VycmVudFxuICAgIC8vIG9iamVjdCwgYW5kIGhhdmUgbm8gaW1wYWN0IG9uIGNoaWxkcmVuLlxuICAgIHN0YXRlczoge1xuICAgICAgaG92ZXI6IFt7dGludDogMTB9LCB7c2hhZGU6IDIyfV0sXG4gICAgfSxcbiAgICAqL1xuICAgIC8vIE5PVEU6IHRoZXNlIHZhcmlhYmxlcyBnZXQgaW5jbHVkZWQgaW50byBlYWNoIGNoaWxkXG4gICAgLy8gYXMgZXgtPHZhcmlhYmxlLW5hbWU+XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBiZzogW10sXG4gICAgICBtZzogW3sgcmVzZXRDb2xvcjogMSB9LCB7IHNoYWRlOiAxMCB9XSxcbiAgICAgIGZnOiBbeyBjb250cmFzdDogYHNvZnRgIH1dLFxuICAgIH0sXG4gICAgY2hpbGRyZW46IHtcbiAgICAgIENvbnRyb2w6IHtcbiAgICAgICAgLy8gTk9URTogQWxsIHRoZXNlIGNvbG9ycyBzdGFydCB3aXRoIHRoZSBjb250ZXh0Q29sb3JcbiAgICAgICAgLy8gYW5kIG5vdCB3aXRoIHRoZSBleC1jb2xvciBmcm9tIHBhcmVudFxuICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICBiYXNlOiB7fSxcbiAgICAgICAgICBob3ZlcjogW3sgdGludDogMTIgfV0sXG4gICAgICAgICAgYWN0aXZlOiBbeyBzaGFkZTogMTggfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGJnOiBbeyBzaGFkZTogMjQgfV0sXG4gICAgICAgICAgbWc6IFt7IHNoYWRlOiA0OCB9XSxcbiAgICAgICAgICBmZzoge1xuICAgICAgICAgICAgLy8gTk9URTogQWxsIHRoZXNlIGNvbG9ycyBzdGFydCB3aXRoIGEgY29udGV4dCBvZiB0aGVcbiAgICAgICAgICAgIC8vIGV4aXN0aW5nIHN0YXRlIG9mIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgYmFzZTogW3sgc2hhZGU6IDI0IH0sIHsgY29udHJhc3Q6IGBzb2Z0YCB9XSxcbiAgICAgICAgICAgICAgaG92ZXI6IFt7IHNoYWRlOiAyNCB9LCB7IGNvbnRyYXN0OiBgc29mdGAgfV0sXG4gICAgICAgICAgICAgIGFjdGl2ZTogW3sgc2hhZGU6IDI0IH0sIHsgY29udHJhc3Q6IGBoYXJkYCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cblxuLy8gY29sb3Igc2NoZW1lICAtPiAgICAgICAgICAgPSBDU1Mgc3R5bGVzaGVldFxuLy8gY29sb3IgcGFsZXR0ZSAtPiBjb21wb25lbnQgPSBDU1Mgc2NvcGVcbi8vIGNvbG9yIGVsZW1lbnQgLT4gcm9sZSAgICAgID0gQ1NTIHZhcmlhYmxlXG4vLyBjb2xvciBzdGF0ZSAgIC0+ICAgICAgICAgICAgIENTUyBwc2V1ZG8tY2xhc3NcblxuLy8gZmFjdG9yZWQgb3BzIC0+IG5lc3RlZCBoZXggbGlzdHMgLT4gY29tcGlsZWQgZm9ybSAoQ1NTKVxuLy8gc2NoZW1lICAgICAgIC0+IHBhbGV0dGUgc2V0ICAgICAgLT4gcGFja2FnZVxuXG4vLyBvcHNcbi8vIF8gUGFsZXR0ZU5hbWUgICAvLyB1c2Vcbi8vIF8gdHJhbnNmb3JtYXRpb25cbi8vIF8gaW5wdXQgPiBzdGF0ZVxuLy8gXyBlbFxuXG4vKiBzY2hlbWVcblxuKi9cblxuLy8gcGFsZXR0ZXNcbmV4cG9ydCBjb25zdCBwYWxldHRlcyA9IFtcbiAge1xuICAgIGlkOiBgUGFsZXR0ZU5hbWVgLFxuICAgIGhleDogYCNmMDBgLFxuICAgIHN0YXRlczogW1xuICAgICAge1xuICAgICAgICBpZDogYGJhc2VgLFxuICAgICAgICBoZXg6IGAjZjAwYCxcbiAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICB7IGlkOiBgYmdgLCBoZXg6IGAjZjAwYCB9LFxuICAgICAgICAgIHsgaWQ6IGBtZ2AsIGhleDogYCNmMDBgIH0sXG4gICAgICAgICAgeyBpZDogYGZnYCwgaGV4OiBgI2YwMGAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgaG92ZXJgLFxuICAgICAgICBoZXg6IGAjZjAwYCxcbiAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICB7IGlkOiBgYmdgLCBoZXg6IGAjZjAwYCB9LFxuICAgICAgICAgIHsgaWQ6IGBtZ2AsIGhleDogYCNmMDBgIH0sXG4gICAgICAgICAgeyBpZDogYGZnYCwgaGV4OiBgI2YwMGAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl1cblxuLypcbmNvbnN0IGNvbG9yU2NoZW1hID0ge1xuICBleGZnOiBjb2xvckNvbnRleHQuc29mdENvbnRyYXN0LFxuICBleGJnOiBoZXgsXG4gIGZnOiB7XG4gICAgYmFzZTogY29sb3JDb250ZXh0LnNvZnRDb250cmFzdCxcbiAgICBob3ZlcjogY29sb3JDb250ZXh0LnNvZnRDb250cmFzdCxcbiAgICBhY3RpdmU6IGNvbG9yQ29udGV4dC5oYXJkQ29udHJhc3QsXG4gICAgZGlzYWJsZTogYSxcbiAgfSxcbiAgbWc6IFsyMCwgMTUsIDI1XS5tYXAobiA9PiBzaGFkZShuKSksXG4gIGJnOiBbMTAsIDUsIDE1XS5tYXAobiA9PiBzaGFkZShuKSksXG59XG5cbmNvbnN0IHN0eWxlc2hlZXQgPSBgXG5hXG5gXG4qL1xuIl19