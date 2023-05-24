import styled from "styled-components";

export const PostDifficultyWrap = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 5px;
  width: 7.25rem;
  border-radius: 5px;
  position: absolute;
  z-index: 100;
  top: 0;
`;

export const PostDifficultyButton = styled.div<{ isActive?: true }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: white;
  background-color: ${({ isActive }) => isActive && "#6e6e80"};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6e6e80;
  }
`;
