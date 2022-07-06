import styled from "styled-components";

export const Button = styled.button`
  padding: 0.625rem 1.875rem;
  width: 7.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: #ffb312;
  font-size: 0.875rem;
  transition: all ease 0.1s;

  &:hover,
  &:focus {
    outline: 0.25rem solid #ffb31292;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
