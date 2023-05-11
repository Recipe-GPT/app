import styled from "styled-components";

export const BoardRecipeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px rgba(255, 215, 96, 0.35);
  border: none;
  padding: 1.25rem 0;
  background-color: white;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.mainGrey};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey600};
  }
  &:active {
    box-shadow: none;
  }
`;
