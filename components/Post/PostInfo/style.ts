import { MdCameraAlt } from "react-icons/md";
import styled from "styled-components";

export const PostInfo = styled.div`
  background-color: white;
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 500px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Icon = styled.span`
  & > svg {
    width: 32px;
    height: 32px;
  }
  color: ${({ theme }) => theme.color.grey800};
`;

export const ExtraInfoWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.grey800};
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
  width: 300px;
`;

export const ImageTitle = styled.div``;