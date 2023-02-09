import React, { FC } from "react";
import { Typography, TextColors } from "primitives";
import { TextFieldProps } from "./types";
import { Root, Label, Input, SvgIcon, ErrorText } from "./styles";

const TextField: FC<TextFieldProps> = ({
  label,
  htmlFor,
  labelVariant,
  errorText,
  errorTextVariant,
  disabled,
  placeholder,
  onChange,
  value,
  svgIcon,
  svgPosition,
  desktopFullWidth,
  name,
  ...rest
}) => {
  return (
    <Root desktopFullWidth={desktopFullWidth}>
      <Label htmlFor={htmlFor}>
        <Typography variant={labelVariant || "description"}>{label}</Typography>
      </Label>
      <Input
        id={htmlFor}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        svgPosition={svgPosition}
        errorText={errorText}
        name={name}
        {...rest}
      />
      <SvgIcon svgPosition={svgPosition}>{svgIcon}</SvgIcon>
      <ErrorText>
        <Typography textColor={TextColors.english_red} variant={errorTextVariant || "description"}>
          {errorText}
        </Typography>
      </ErrorText>
    </Root>
  );
};

export default TextField;
