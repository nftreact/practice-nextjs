import React, { FC } from "react";
import { Typography, TextColors, Flex, Colors } from "primitives";
import { RadioProps } from "./types";
import { Input, Label } from "./styels";

const Radio: FC<RadioProps> = ({ htmlFor, labelVariant = "description", label, ...rest }) => {
  return (
    <Flex gap={0.5}>
      <Input type="radio" id={htmlFor} {...rest} />
      <Label htmlFor={htmlFor}>
        <Typography variant={labelVariant} textColor={TextColors.gray}>
          {label}
        </Typography>
      </Label>
    </Flex>
  );
};

export default Radio;
