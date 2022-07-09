import styled from "styled-components";

export const H1Style = styled.h1`
  font-family: var(--typo-second);
  font-size: 2.5rem;
  position: relative;
  text-transform: capitalize;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 1.0625rem;
    height: 1.0625rem;
    border-radius: 0.125rem;
    z-index: -1;
    bottom: 0.9375rem;
    left: -0.125rem;
    background-color: #ffb312;
  }
`;
