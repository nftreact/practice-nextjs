import TextField from "primitives/TextField/TextField";
import React, { FC } from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";

type InputFormFieldProps = {
  name: string | undefined;
};

const InputFormField: FC<InputFormFieldProps> = ({ name, ...rest }) => {
  const { control } = useForm();
  return (
    <Controller
      render={({ field }) => <TextField {...Object.assign({}, field, rest)} />}
      control={control}
      name={""}
    />
  );
};

export default InputFormField;
