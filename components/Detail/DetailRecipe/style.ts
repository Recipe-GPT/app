import styled from "styled-components";

export const DetailRecipe = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  padding-bottom: 0.8rem;
  font-family: "Pretendard-Light";
`;

export const MainHr = styled.hr`
  background-color: ${({ theme }) => theme.color.mainYellow};
  height: 2px;
  border: 0;
`;

export const Recipe = styled.div``;

export const RecipeStep = styled.div``;

export const RecipeTop = styled.div`
  display: flex;
  padding: 1.2rem 0rem;
  align-items: center;
`;

export const Step = styled.p`
  font-size: 1.1rem;
  font-family: "Pretendard-Light";
`;

export const StepStory = styled.p`
  padding-left: 1.5rem;
  font-family: "Pretendard-Light";
  font-size: 0.8rem;
`;

export const RecipeHr = styled.hr`
  background-color: ${({ theme }) => theme.color.grey700};
  height: 1px;
  border: 0;
`;

export const RecipeWriter = styled.div`
  padding-top: 1rem;
  text-align: right;
`;
export const Writer = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.grey800};
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.grey800};
  font-size: 0.7rem;
  padding: 0rem 0.4rem;
`;
