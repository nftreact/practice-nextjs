import styled from "styled-components";

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }
  :checked {
    ::after {
      border: 1px solid #184b4d;
      background-color: #184b4d;
      margin-right: -2px;
      margin-top: -2px;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;