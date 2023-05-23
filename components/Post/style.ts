import styled from "styled-components";

export const Post = styled.div`
  background-color: ${({ theme }) => theme.color.serveYellow};
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  top: 5rem;
  padding: 0 9.375rem 20rem 9.375rem;
  min-height: calc(100vh - 5rem);
`;
