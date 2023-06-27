import styled from "styled-components";

export const BoardItemSkeleton = styled.div`
  border-radius: 15px;
  width: 16.25rem;
  height: 24.7656rem;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  animation: ${({ theme }) => theme.animations.Skeleton} 1.5s ease-in-out infinite;
`;
