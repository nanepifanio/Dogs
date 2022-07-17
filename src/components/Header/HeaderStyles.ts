import styled from "styled-components";
import userIcon from "../../assets/usuario.svg";

export const HeaderContainer = styled.header`
  box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1001;
  background-color: #fff;
  top: 0rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .login {
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: inline-block;
      width: 0.875rem;
      height: 1.0625rem;
      background: url(${userIcon}) no-repeat center center;
      margin-left: 0.5rem;
      position: relative;
      top: -0.0625rem;
    }
  }

  img {
    padding: 0.5rem 0;
  }
`;
