import React, { FC } from "react";
import { Root } from "./styles";
import { DividerProps } from "./types";

const Divider: FC<DividerProps> = ({ vertical }) => {
  return <Root vertical={vertical} />;
};

export default Divider;
