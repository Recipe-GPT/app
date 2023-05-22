import styled from "styled-components";

export const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.lightGrey};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.color.grey800};
`;
