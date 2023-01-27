import { isNumber } from "lodash";
import { css } from "styled-components";
import { Breakpoints } from "./breakpoints";


export const Spacing = {
  x0: 0,
  x: 0.4,
  x2: 0.8,
  x3: 1.2,
  x4: 1.6,
  x5: 2,
  x6: 2.4,
  x7: 2.8,
  x8: 3.2,
  x9: 3.6,
  x10: 4,
  x11: 4.4,
  x12: 4.8,
  x14: 5.6,
  x16: 6.4,
  x20: 8,
};

export type SpacingType = {
  m?: keyof typeof Spacing | number;
  mt?: keyof typeof Spacing | number;
  mr?: keyof typeof Spacing | number;
  mb?: keyof typeof Spacing | number;
  ml?: keyof typeof Spacing | number;
  mx?: keyof typeof Spacing | number | "auto";
  my?: keyof typeof Spacing | number;
  p?: keyof typeof Spacing | number;
  pt?: keyof typeof Spacing | number;
  pr?: keyof typeof Spacing | number;
  pb?: keyof typeof Spacing | number;
  pl?: keyof typeof Spacing | number;
  px?: keyof typeof Spacing | number;
  py?: keyof typeof Spacing | number;
  secOuterHrz?: boolean;
  secOuterVrt?: boolean;
  btn?: boolean;
};

export const spacingHelper = (args: SpacingType) =>
  css`
    // directional margin
    ${args.ml && `margin-left: ${isNumber(args.ml) ? args.ml : Spacing[args.ml]}rem`}
    ${args.mr && `margin-right: ${isNumber(args.mr) ? args.mr : Spacing[args.mr]}rem`};
    ${args.mb && `margin-bottom: ${isNumber(args.mb) ? args.mb : Spacing[args.mb]}rem`};
    ${args.mt && `margin-top: ${isNumber(args.mt) ? args.mt : Spacing[args.mt]}rem`};

    // horizontal margin
    ${args.mx &&
    (args.mx === "auto"
      ? `margin-left: ${args.mx}; margin-right: ${args.mx};`
      : isNumber(args.mx)
      ? `margin-left: ${args.mx}rem; margin-right: ${args.mx}rem;`
      : `margin-left: ${Spacing[args.mx]}rem; margin-right: ${Spacing[args.mx]}rem;`)}

    // vertical margin
    ${args.my && (isNumber(args.my) ? `margin-top: ${args.my}rem; margin-bottom: ${args.my}rem;` : `margin-top: ${Spacing[args.my]}rem; margin-bottom: ${Spacing[args.my]}rem;`)}

    // all direction margin
    ${args.m && `margin: ${isNumber(args.m) ? args.m : Spacing[args.m]}rem`}

    // directional padding
    ${args.pl && `padding-left: ${isNumber(args.pl) ? args.pl : Spacing[args.pl]}rem`}
    ${args.pr && `padding-right: ${isNumber(args.pr) ? args.pr : Spacing[args.pr]}rem`};
    ${args.pb && `padding-bottom: ${isNumber(args.pb) ? args.pb : Spacing[args.pb]}rem`};
    ${args.pt && `padding-top: ${isNumber(args.pt) ? args.pt : Spacing[args.pt]}rem`};

    // horizontal padding
    ${args.px && (isNumber(args.px) ? `padding-left: ${args.px}rem; padding-right: ${args.px}rem;` : `padding-left: ${Spacing[args.px]}rem; padding-right: ${Spacing[args.px]}rem;`)}

    // vertical padding
    ${args.py && (isNumber(args.py) ? `padding-top: ${args.py}rem; padding-bottom: ${args.py}rem;` : `padding-top: ${Spacing[args.py]}rem; padding-bottom: ${Spacing[args.py]}rem;`)}

    // all direction padding
    ${args.p && `padding: ${isNumber(args.p) ? args.p : Spacing[args.p]}rem`}

    // a-ds custom
    ${args.secOuterHrz &&
    `padding-left: 1.6rem; padding-right: 1.6rem; @media (min-width: ${Breakpoints.md}) {padding-left: 4rem; padding-right: 4rem;}`}
     ${args.secOuterVrt &&
    `margin-top: 4rem; @media (min-width: ${Breakpoints.md}) {margin-top: 8rem}`}
    ${args.btn && `padding: 0.8rem 1.6rem`}
  `;
66;
