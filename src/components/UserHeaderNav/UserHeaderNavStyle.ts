import styled from "styled-components";

export const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  img {
    display: inline;
  }

  a,
  button {
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }

    &.active {
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;

      svg > * {
        fill: #fb1;
      }
    }
  }
`;
