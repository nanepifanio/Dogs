import styled from "styled-components";
import views from "../../../../assets/visualizacao.svg";

export const PhotosItemLi = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  span {
    grid-area: 1 / 1;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;
  }

  &:hover span {
    display: flex;

    &::before {
      content: "";
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${views}) no-repeat;
    }
  }

  div {
    grid-area: 1 / 1;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
