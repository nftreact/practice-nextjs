import React, { FC } from "react";
import ReactLoading from "react-loading";
import { LoadingProps } from "./types";

const Loading: FC<LoadingProps> = ({ color, type }) => {
  return <ReactLoading type={type} color={color} height={20} width={20} />;
};

export default Loading;
