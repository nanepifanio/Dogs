import styled from "styled-components";

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url("src/assets/login.jpg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
