import React, { memo } from "react";

import { useFormContext, useWatch } from "react-hook-form";

const NestedInput = () => {
  const methods = useFormContext();

  return <input {...methods.register("nested")} />;
};
export default memo(NestedInput);
