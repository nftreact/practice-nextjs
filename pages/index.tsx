import React, { memo, useEffect } from "react";
import ClientInfo from "@components/client-info/ClientInfo";
import Header from "@components/layout/Header";
import { ArrowCircleLeft, Close } from "@assets/icon";
import { useForm, Controller, FormProvider, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputFormField from "primitives/input-form-field/InputFormField";
import Button from "primitives/button/Button";
import { Colors, TextColors } from "primitives";
import Checkbox from "primitives/checkbox/CheckBox";
import Radio from "primitives/radio/Radio";
import Slider from "primitives/slider/Slider";
import TextField from "primitives/TextField/TextField";
import NestedInput from "@components/NestedInput";
import Sample from "@components/Sample";
import Divider from "primitives/divider/Divider";

export default function index() {
  const methods = useForm();
  const { register, handleSubmit, watch, control, getValues } = methods;

  return (
    // <FormProvider {...methods}>
    //   <form onSubmit={handleSubmit((data) => console.log(data))}>
    //     <div>
    //       <label>Test</label>
    //       <input {...register("test")} />
    //     </div>
    //     <div>
    //       <label>ali</label>
    //       <input {...register("ali")} />
    //     </div>
    //     <div>
    //       <label>nested</label>
    //       <NestedInput  />
    //     </div>
    //     <input type="submit" />
    //   </form>
    // </FormProvider>
    <div style={{ height: "500px" }}>
      <div>sample test</div>
      <Divider vertical />
    </div>
  );
}
