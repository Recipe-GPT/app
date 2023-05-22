import styled from "styled-components";

export const ChatDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.span`
  display: block;
  font-size: 2rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid ${({ theme }) => theme.color.mainYellow};
`;
