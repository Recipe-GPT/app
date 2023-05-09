import styled from "styled-components";

export const BoardWrap = styled.div<{ isYellow?: true }>`
  padding: 2.5rem 9.375rem;
  background-color: ${({ isYellow, theme }) =>
    isYellow ? theme.color.mainYellow : "#FFFFFF"};
`;

export const Title = styled.h1<{ isYellow?: true }>`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: ${({ theme, isYellow }) =>
    isYellow ? "#FFFFFF" : theme.color.mainGrey};
`;

export const Emphasis = styled.span`
  color: ${({ theme }) => theme.color.mainYellow};
`;
