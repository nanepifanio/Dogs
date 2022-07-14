import styled from "styled-components";

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const CommentTextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const CommentButton = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  outline: none;

  &:focus svg path,
  &:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  &:focus svg g,
  &:hover svg g {
    animation: latir 0.6s infinite;
  }

  @keyframes latir {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
