import styled, { css } from "styled-components";

export const Input = styled.input`
  appearance: none;
  cursor: pointer;
  border: 1.5px solid #d9d9d9;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  display: grid;
  place-content: center;
  transform: translateY(-0.2rem);
  background-color: #d9d9d9;

  &::before {
    content: " ";
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
    transform: scale(0);
    transition: 20ms transform ease-in-out;
    box-shadow: inset 1em 1em #184b4d;
    background-color: #184b4d;
  }
  &:checked::before {
    transform: scale(0.7);
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;