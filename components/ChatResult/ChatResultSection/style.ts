import styled from "styled-components";

export const Material = styled.span`
  background-color: ${({ theme }) => theme.color.lightYellow};
  font-weight: normal;
`;

export const RecipeList = styled.div`
  width: 100%;
  padding: 3rem 4rem;
  line-height: 30px;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.mainYellow};
  margin: 10px 0;
`;
