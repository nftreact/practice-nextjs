import { Breakpoints, Colors } from "primitives";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const Root = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ onLoading }) => (onLoading ? "0.8rem 4rem" : "0.8rem 1.6rem")};
  border-radius: 8px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#184B4D")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: ${({ borderClr }) => (borderClr ? `1px solid ${borderClr}` : "none")};

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
          @media (min-width: ${Breakpoints.md}) {
            width: fit-content;
          }
        `
      : css`
          width: fit-content;
        `};
  cursor: ${({ disabled }) => {
    return !disabled ? "pointer" : "not-allowed";
  }};
`;

export const SvgIcon = styled.div`
  display: none;
  @media (min-width: ${Breakpoints.md}) {
    display: block;
  }
`;