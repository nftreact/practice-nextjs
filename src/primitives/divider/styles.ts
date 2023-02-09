import styled from "styled-components";
import { DividerProps } from "./types";


export const Root = styled.div<DividerProps>`
  background-color: #dddddd;
  margin: 5px 0;
  width: ${({ vertical }) => (vertical ? "1px" : "100%")};
  height: ${({ vertical }) => (vertical ? "100%" : "1px")};
`;