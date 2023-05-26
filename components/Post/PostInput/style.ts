import styled from "styled-components";

export const PostInput = styled.input<{ isBig?: true; width?: string }>`
  border: none;
  border-bottom: 1px solid black;
  transition: 0.1s;
  font-size: ${({ isBig }) => (isBig ? "1.75rem" : "1.25rem")};
  line-height: 200%;
  width: ${({ width }) => (width ? `${width}` : "100%")};
  &::placeholder {
    color: #d1d1d7;
  }
  &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.color.mainYellow};
    outline: none;
  }
`;
