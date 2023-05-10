import styled from "styled-components";

export const BoardSection = styled.section<{ isYellow?: true }>`
  padding: 2.5rem 9.375rem;
  background-color: ${({ isYellow, theme }) =>
    isYellow ? theme.color.mainYellow : "#FFFFFF"};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

export const BoardWrap = styled.div`
  /* display: flex;
  gap: 2.25rem;
  flex-wrap: wrap; */
  display: grid;
  gap: 2.25rem;
  grid-template-columns: repeat(4, 1fr);
`