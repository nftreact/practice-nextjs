import React, { FC } from "react";
import { Typography, TextColors, Flex } from "primitives";
import { ButtonProps } from "./types";
import Loading from "primitives/loading/Loading";
import { Root, SvgIcon } from "./styles";

const Button: FC<ButtonProps> = ({
  borderClr,
  fullWidth,
  children,
  bgColor,
  svgIcon,
  textVariant = "description",
  textColor = TextColors.white,
  reverse,
  onLoading,
  LoadingType = "balls",
  ...rest
}) => {
  return (
    <Root
      borderClr={borderClr}
      fullWidth={fullWidth}
      bgColor={bgColor}
      reverse={reverse}
      onLoading={onLoading}
      {...rest}
    >
      {onLoading ? (
        <Loading type={LoadingType} color="#fff" />
      ) : (
        <Flex gap={1.6}>
          {svgIcon && <SvgIcon>{svgIcon}</SvgIcon>}
          <Typography textColor={textColor} variant={textVariant}>
            {children}
          </Typography>
        </Flex>
      )}
    </Root>
  );
};

export default Button;
