import styled from "styled-components";

type PhotoCommentsProps = {
  single?: boolean;
};

export const PhotoCommentsUl = styled.ul<PhotoCommentsProps>`
  overflow-y: auto;
  word-break: break-word;
  padding: ${({ single }) => (single ? "0rem" : "0 2rem")};

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  @media (max-width: 64rem) {
    overflow-y: visible;
  }
`;
