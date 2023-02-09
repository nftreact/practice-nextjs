import { Colors, Breakpoints, TextColors } from "primitives";
import styled from "styled-components";

export const Root = styled.div<{ desktopFullWidth?: boolean }>`
  display: grid;
  gap: 0.4rem;
  @media (min-width: ${Breakpoints.md}) {
    max-width: ${({ desktopFullWidth }) => (desktopFullWidth ? "100%" : "310px")};
  }
`;

export const Label = styled.label`
  padding-right: 1rem;
`;

export const Input = styled.input<{ svgPosition?: "left" | "right"; errorText?: string }>`
  position: relative;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 1rem;
  color: ${TextColors.black};
  font-size: 1rem;
  ${(props) => (props.errorText ? "border-color: #ff0000" : "border-color: #000")};
  ${(props) => (props.svgPosition === "right" ? "padding-right: 3rem" : "padding-right: 1rem")};
  &:focus {
    outline: none;
  }
  &:disabled {
    border-color: ${Colors.gray};
    opacity: 0.3;
  }
  placeholder: {
    color: ${Colors.gray};
  }
`;

export const ErrorText = styled.div`
  padding-right: 1rem;
`;

export const SvgIcon = styled.div<{ svgPosition?: "left" | "right" }>`
  position: absolute;
  top: 3.4rem;
  ${(props) => (props.svgPosition === "left" ? "left: 1rem" : "right: 1rem")};
  border: "1px solid red";
  cursor: pointer;
`;