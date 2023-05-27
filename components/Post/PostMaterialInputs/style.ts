import { IoAddCircle } from "react-icons/io5";
import { MdClear } from "react-icons/md";
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

export const DeleteIcon = styled(MdClear)`
  color: ${({ theme }) => theme.color.grey800};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
