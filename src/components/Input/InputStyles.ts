import styled from "styled-components";

export const InputStyle = styled.div`
  margin: 1.25rem 0rem;

  input {
    width: 100%;
    margin: 0.3125rem 0;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #ddd;
    border: none;
    outline: none;
    padding: 0rem 0.625rem;
    transition: all ease 0.1s;

    &:hover,
    &:focus {
      outline: 4px solid #ffb31292;
      background-color: #fff;
    }
  }
`;
