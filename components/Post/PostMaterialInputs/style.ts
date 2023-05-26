import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

export const PostMaterialInputs = styled.div`
  width: 47.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MaterialTitle = styled.div`
  text-align: left;
  width: 100%;
`;

export const Materials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Material = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.color.grey900};
  border-radius: 10px;
  padding: 0.375rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.serveYellow};
  }
`;

export const AddIcon = styled(IoAddCircle)`
  color: ${({ theme }) => theme.color.mainYellow};
  width: 1.25rem;
  height: 1.25rem;
`;
