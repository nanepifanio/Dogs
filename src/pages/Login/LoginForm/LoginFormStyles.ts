import styled from "styled-components";

export const FormContainer = styled.div`
  .perdeu {
    display: inline-block;
    margin: 2rem 0;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: "";
      height: 0.125rem;
      width: 100%;
      background-color: currentColor;
      display: block;
    }
  }
`;

export const SignInArea = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;

  p {
    margin: 2rem 0;
  }

  h2 {
    font-family: var(--typo-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: "";
      display: block;
      background-color: #ddd;
      width: 3rem;
      height: 0.25rem;
      border-radius: 0.2rem;
    }
  }
`;
