import { spacingHelper, SpacingType } from "./spacing";
import { Breakpoints } from "./breakpoints";
import styled from "styled-components";

type Props = {
  size?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  order?: number;
  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
  xlOrder?: number;
  spacing?: SpacingType;
};

export const Col = styled.div<Props>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ spacing }) => spacing && spacingHelper(spacing)};

  ${({ order }) => order && `order:${order}`};

  // override when size is defined
  ${({ size }) => size && `flex: 0 0 ${100 / (12 / size)}%`};
  ${({ size }) => size && `max-width: ${100 / (12 / size)}%`};

  @media (min-width: ${Breakpoints.sm}) {
    & {
      ${({ sm }) => sm && `flex: 0 0 ${100 / (12 / sm)}%`};
      ${({ sm }) => sm && `max-width: ${100 / (12 / sm)}%`};
      ${({ smOrder }) => smOrder && `order:${smOrder}`};
    }
  }

  @media (min-width: ${Breakpoints.md}) {
    & {
      ${({ md }) => md && `flex: 0 0 ${100 / (12 / md)}%`};
      ${({ md }) => md && `max-width: ${100 / (12 / md)}%`};
      ${({ smOrder }) => smOrder && `order:${smOrder}`};
    }
  }

  @media (min-width: ${Breakpoints.lg}) {
    & {
      ${({ lg }) => lg && `flex: 0 0 ${100 / (12 / lg)}%`};
      ${({ lg }) => lg && `max-width: ${100 / (12 / lg)}%`};
      ${({ smOrder }) => smOrder && `order:${smOrder}`};
    }
  }

  @media (min-width: ${Breakpoints.xl}) {
    & {
      ${({ xl }) => xl && `flex: 0 0 ${100 / (12 / xl)}%`};
      ${({ xl }) => xl && `max-width: ${100 / (12 / xl)}%`};
      ${({ smOrder }) => smOrder && `order:${smOrder}`};
    }
  }
`;
