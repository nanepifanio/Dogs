import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.125rem;
  align-items: center;
`;

export const FormH1 = styled.h1`
  font-family: serif;
  font-size: 2rem;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 2px;
    z-index: -1;
    bottom: 5px;
    left: -5px;
    background-color: #ffb312;
  }
`;

export const FormArea = styled.form`
  button {
  }
`;
