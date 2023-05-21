import styled from "styled-components";

export const ChatDetailRecipeStep = styled.div`
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey700};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Step = styled.div`
  width: 80px;
  font-size: 1.5rem;
  display: flex;
  gap: 0.5rem;
  /* justify-content: space-between; */
  align-items: center;
`;

export const StepCount = styled.div``;

export const Children = styled.span``;
