import styled from "styled-components";

export const ReviewCard = styled.div`
  background: white;
  width: 20vw;
  padding: 25px;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
`;

export const CardTop = styled.div`
  height: 5vh;
`;

export const CardImage = styled.div`
  width: 3vw;
  height: 5vh;
  overflow: hidden;
  margin: 0;
  border-radius: 100px;
  float: left;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  position: relative;
  top: 5px;
  left: 15px;
`;

export const CardName = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const CardMenu = styled.p`
  padding-top: 1px;
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.mainYellow};
`;

export const CardMid = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.mainYellow};
  padding: 10px 0px;
  position: relative;
`;

export const CardStar = styled.div`
  font-size: 18px;
`;

export const CardStarNum = styled.p`
  position: relative;
  right: 135px;
`;

export const CardBottom = styled.div``;

export const CardReview = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 14px;
`;
