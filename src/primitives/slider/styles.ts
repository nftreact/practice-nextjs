import { Typography } from "primitives";
import styled from "styled-components";


export const Root = styled.div`
  display: grid;
  gap: 0.7rem;
  padding-inline: 0.5rem;
`;

export const Input = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  padding: 0;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  direction: rtl;
  background-color: #e6e6e6;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 50%;
    height: 7px;
    width: 7px;
    border-radius: 5px;
    background: #184b4d;
    border: 1px solid #c5c5c5;
  }
`;

export const ShowRangeValue = styled(Typography)`
  padding-inline: 1rem;
`;