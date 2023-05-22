import styled from "styled-components";

export const ChatDetailMaterialTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.span`
  display: block;
  font-size: 1.5rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${({ theme }) => theme.color.grey700};
`;
