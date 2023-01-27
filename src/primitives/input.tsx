import { Breakpoints, Flex, Typography } from "primitives";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
type InputProps = {
  width?: any;
  label?: string;
  textError?: string;
  labelVariant?: "body" | "h1" | "h2" | "h3" | "title" | "description" | undefined;
  md?: string;
  lg?: string;
  svgIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  svgPosition?: "left" | "right";
};
export const Input: FC<InputProps> = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <Wrapper lg={props.lg} md={props.md} width={props.width}>
      {props.labelVariant && (
        <LabelTypography variant={props.labelVariant}>{props.label}</LabelTypography>
      )}
      <InputStyle placeholder={props.placeholder} {...rest} />
      {props.svgIcon && <InputSvg className="svgIconStyle">{props.svgIcon}</InputSvg>}
      {props.textError && <ErrorTypography>{props.textError}</ErrorTypography>}
    </Wrapper>
  );
};
const Wrapper = styled("section")<InputProps>`
  position: relative;
  height: max-content;
  width: ${(props) => props.width};
  @media (min-width: ${Breakpoints.md}) {
    width: ${(props) => props.md};
  }
  @media (min-width: ${Breakpoints.lg}) {
    width: ${(props) => props.lg};
  }
`;
const InputStyle = styled.input`
  position: relative;
  width: 100%;
  border: 0.5px solid #333333;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 4px;

  ::placeholder {
    font-size: 12px;
  }
`;

const LabelTypography = styled(Typography)`
  padding-right: 8px;
`;

const ErrorTypography = styled(Typography)`
  padding-right: 8px;
`;

const InputSvg = styled(Typography)`
  position: absolute;
  top: 2rem;
  right: 0.5rem;
  cursor: pointer;
`;
