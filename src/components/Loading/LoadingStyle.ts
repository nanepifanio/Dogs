import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1002;
`;

export const LoadingStyle = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding-left: 5px;
`;
