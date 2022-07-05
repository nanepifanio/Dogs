import styled from "styled-components";

export const InputStyle = styled.div`
  margin: 1.25rem 0rem;

  label {
  }

  input {
    width: 100%;
    margin: 0.3125rem 0;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #ddd;
    border: none;
    outline: none;
    padding: 0rem 0.625rem;

    &:hover {
      box-shadow: 0px 0px 0.375rem #ffb312;
      background-color: #fff;
    }
  }

  p {
    font-size: 0.875rem;
    color: #f00;
  }
`;
