import styled, { css } from "styled-components";
import visualizacao_black from "../../../assets/visualizacao-black.svg";

type PhotoContentProps = {
  single?: boolean;
};

export const PhotoContentContainer = styled.div<PhotoContentProps>`
  margin: auto;
  height: ${({ single }) => (single ? "auto" : "36rem")};
  border-radius: 0.2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "1fr" : "36rem 20rem")};
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  ${({ single }) =>
    !single &&
    css`
      @media (max-width: 64rem) {
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
      }
    `}
`;

export const ContentImgArea = styled.div<PhotoContentProps>`
  grid-row: ${({ single }) => (single ? "1" : "1 / 4")};

  ${({ single }) =>
    single &&
    css`
      border-radius: 0.4rem;
      overflow: hidden;
    `}

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const ContentDetailsArea = styled.div<PhotoContentProps>`
  padding: ${({ single }) =>
    single ? "1rem 0rem 0rem 0rem" : "2rem 2rem 0rem 2rem"}; ;
`;

export const ContentSpan = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${visualizacao_black});
  }
`;

export const ContentAttributeAreas = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    &::before {
      content: "";
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background-color: #333;
      margin-top: 5px;
    }
  }
`;

export const ContentAuthor = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
