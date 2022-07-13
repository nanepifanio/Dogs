import styled, { css } from "styled-components";

type MobileProps = {
  mobileActive: boolean;
  mobile?: boolean;
};

export const HeaderNav = styled.nav<MobileProps>`
  ${({ mobile }) =>
    !mobile &&
    css`
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
    `}

  ${({ mobile, mobileActive }) =>
    mobile &&
    css`
      display: block;
      position: absolute;
      top: 70px;
      right: 0px;
      padding: 0 1rem;
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border-radius: 0.2rem;
      transform: translateX(-10px);
      opacity: 0;
      pointer-events: none;

      ${mobileActive &&
      css`
        transition: 0.3s;
        transform: initial;
        opacity: 1;
        z-index: 100;
        pointer-events: inherit;
      `}

      a,
      button {
        display: flex;
        align-items: center;
        background-color: none;
        background-color: #fff;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: 0.5rem 0;
        cursor: pointer;

        &:hover {
          svg > * {
            fill: #fb1;
          }
        }

        &.active {
          svg > * {
            fill: #fb1;
          }
        }
      }

      button {
        border-bottom: none;
      }
    `}
`;

export const MobileButton = styled.button<MobileProps>`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: all 0.2s ease;

    ${({ mobileActive }) =>
      mobileActive &&
      css`
        transform: rotate(90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      `}
  }

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
    color: #fb1;
  }
`;
