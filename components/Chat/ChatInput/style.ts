import styled from "styled-components";
import { FiSend } from "react-icons/fi";

export const ChatInput = styled.div`
  position: fixed;
  bottom: 2.5rem;
  width: calc(100% - 16.25rem);
`;

export const InputWrap = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: calc(100% - 25rem);
  left: 50%;
  transform: translateX(-50%);
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  margin: 0 auto;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 1.25rem;
  border-radius: 10px;
`;

export const Placeholder = styled.span`
  position: absolute;
  right: 2.75rem;
  color: ${({ theme }) => theme.color.grey700};
  user-select: none;
`;

export const SendIcon = styled(FiSend)`
  position: absolute;
  right: 1.25rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.grey700};
`;

export const ChangingStatusWrap = styled.div`
  width: 8rem;
  height: 3rem;
  display: flex;
  align-items: center;
  width: calc(100% - 25rem);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const ChangingStatus = styled.div<{ isActive: boolean }>`
  box-shadow: ${({ isActive }) => isActive && "0px 0px 5px rgba(0, 0, 0, 0.1)"};
  border-bottom: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 2rem;
  transition: 0.1s;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive && theme.color.serveYellow};
`;
