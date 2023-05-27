import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

export const PostAppendButton = styled.div`
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
