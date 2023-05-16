import styled from "styled-components";
import { FiSend } from "react-icons/fi";

export const ChatInput = styled.div`
  position: absolute;
  bottom: 2.5rem;
  width: calc(100% - 25rem);
  left: 50%;
  transform: translateX(-50%);
`;

export const InputWrap = styled.form`
  display: flex;
  align-items: center;
  position: relative;
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

export const SendIcon = styled(FiSend)`
  position: absolute;
  right: 1.25rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.grey700};
`;