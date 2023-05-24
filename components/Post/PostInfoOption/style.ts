import { IoTriangleSharp } from "react-icons/io5";
import styled from "styled-components";

export const PostInfoOption = styled.div`
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

export const TextWrap = styled.div<{ isButton?: boolean }>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  position: relative;
  cursor: ${({ isButton }) => isButton && "pointer"};
`;

export const Text = styled.p`
  min-width: 50px;
`;

export const TriangleWrap = styled.div`
  width: 12px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const Triangle = styled(IoTriangleSharp)<{ isReverse?: true }>`
  width: 12px;
  height: 12px;
  transform: ${({ isReverse }) => isReverse && "rotate(180deg)"};
  color: ${({ theme }) => theme.color.mainYellow};
  cursor: pointer;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.color.grey800};
  user-select: none;
`;
