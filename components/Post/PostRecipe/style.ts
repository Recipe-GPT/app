import { MdClear } from "react-icons/md";
import styled from "styled-components";

export const PostRecipe = styled.div`
  background-color: white;
  padding: 1.75rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RecipeInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const RecipeInput = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  align-items: center;
`;

export const Step = styled.div`
  width: 50px;
`;

export const DeleteIcon = styled(MdClear)`
  color: ${({ theme }) => theme.color.grey800};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
