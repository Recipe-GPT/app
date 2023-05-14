import styled from "styled-components";

export const BoardMenuButton = styled.div`
  color: ${({ theme }) => theme.color.grey900};
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const MenuActiveWrap = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 5px;
  width: 6rem;
  border-radius: 5px;
  position: absolute;
  z-index: 100;
`;

export const MenuActiveButton = styled.div<{ isActive?: true }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: white;
  background-color: ${({ isActive }) => isActive && "#6e6e80"};
  border-radius: 5px;
  font-size: 1.15rem;
  cursor: pointer;
  &:hover {
    background-color: #6e6e80;
  }
`;
