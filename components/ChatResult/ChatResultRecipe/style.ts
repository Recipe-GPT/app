import styled from "styled-components";

export const Index = styled.span`
  display: inline-block;
  width: 20px;
`;

export const StyledLi = styled.p`
  display: flex;
  &::before {
    content: "·";
    margin: 0 10px 0 20px;
  }
`;

export const Recipe = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey600};
  }
`;
