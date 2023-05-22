import styled from "styled-components";

export const DetailIngredients = styled.div`
  width: 50vw;
  margin: 0 auto;
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

export const Ingredients = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export const Ingredient = styled.div`
  width: 24vw;
`;

export const IngredientInfor = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

export const MiniTitle = styled.p`
  font-size: 1.1rem;
  font-family: "Pretendard-Light";
`;

export const ServeHr = styled.hr`
  background-color: ${({ theme }) => theme.color.grey700};
  height: 1px;
  border: 0;
`;

export const HrPad = styled.div`
  padding: 12px 0px 12px 0px;
`;

export const IngredientName = styled.p`
  font-size: 0.8rem;
  font-family: "Pretendard-Light";
`;
export const IngredientNum = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.grey900};
  font-family: "Pretendard-Light";
`;
