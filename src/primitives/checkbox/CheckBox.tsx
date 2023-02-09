import React, { FC } from "react";
import { Typography, TextColors, Flex } from "primitives";
import { CheckBoxProps } from "./types";
import { Input, Label } from "./styles";

const Checkbox: FC<CheckBoxProps> = ({ label, labelVariant = "description", htmlFor, ...rest }) => {
  return (
    <Flex alignItems="center" gap={0.5}>
      <Input type="checkbox" id={htmlFor} {...rest} />
      <Label htmlFor={htmlFor}>
        <Typography variant={labelVariant} textColor={TextColors.gray}>
          {label}
        </Typography>
      </Label>
    </Flex>
  );
};

export default Checkbox;
