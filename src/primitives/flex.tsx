import { kebabCase } from "lodash";
import styled, { css, CSSProperties } from "styled-components";
import { spacingHelper, SpacingType } from "./spacing";
import { Breakpoints } from "./breakpoints";
import { motion } from "framer-motion"; 

// TODO: fix Breakpoint in flex for gutter
export type FlexProps = {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  flexWrap?: CSSProperties["flexWrap"];
  gutter?: number;
  spacing?: SpacingType;
  xs?: { [T in keyof CSSProperties]: CSSProperties[T] }[];
  sm?: { [T in keyof CSSProperties]: CSSProperties[T] }[];
  md?: { [T in keyof CSSProperties]: CSSProperties[T] }[];
  lg?: { [T in keyof CSSProperties]: CSSProperties[T] }[];
  xl?: { [T in keyof CSSProperties]: CSSProperties[T] }[];
};

export const Base = css<FlexProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({ spacing }) => spacing && spacingHelper(spacing)};
  ${({ gap }) => gap && `gap: ${gap}rem`};

  & > *:not(:first-child):not(:last-child) {
    ${({ gutter, flexDirection }) =>
      gutter &&
      (flexDirection === "row-reverse"
        ? `padding-left: ${gutter / 2}rem`
        : `padding-right: ${gutter / 2}rem`)};
    ${({ gutter, flexDirection }) =>
      gutter &&
      (flexDirection === "row-reverse"
        ? `padding-right: ${gutter / 2}rem`
        : `padding-left: ${gutter / 2}rem`)};
  }

  & > *:first-child {
    ${({ gutter, flexDirection }) =>
      gutter &&
      (flexDirection === "row-reverse"
        ? `padding-right: ${gutter / 2}rem`
        : `padding-left: ${gutter / 2}rem`)};
  }

  & > *:last-child {
    ${({ gutter, flexDirection }) =>
      gutter &&
      (flexDirection === "row-reverse"
        ? `padding-left: ${gutter / 2}rem`
        : `padding-right: ${gutter / 2}rem`)};
  }

  @media (min-width: ${Breakpoints.xs}) {
    & {
      ${({ xs }) => xs && xs.map((i) => `${kebabCase(Object.keys(i)[0])}:${Object.values(i)[0]};`)}
    }
  }

  @media (min-width: ${Breakpoints.sm}) {
    & {
      ${({ sm }) => sm && sm?.map((i) => `${kebabCase(Object.keys(i)[0])}:${Object.values(i)[0]};`)}
    }
  }

  @media (min-width: ${Breakpoints.md}) {
    & {
      ${({ md }) => md && md?.map((i) => `${kebabCase(Object.keys(i)[0])}:${Object.values(i)[0]};`)}
    }
  }

  @media (min-width: ${Breakpoints.lg}) {
    & {
      ${({ lg }) => lg && lg?.map((i) => `${kebabCase(Object.keys(i)[0])}:${Object.values(i)[0]};`)}
    }
  }

  @media (min-width: ${Breakpoints.xl}) {
    & {
      ${({ xl }) => xl && xl?.map((i) => `${kebabCase(Object.keys(i)[0])}:${Object.values(i)[0]};`)}
    }
  }
`;

export const Flex = styled.div<FlexProps>`
  ${Base}
`;

export const MotionFlex = styled(motion.div)<FlexProps>`
  ${Base}
`;
