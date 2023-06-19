import styled from "styled-components";

export const LandingQuery = styled.div`
  background: ${({ theme }) => theme.color.serveYellow};
  height: auto;
  position: relative;
  padding: 80px 0px;
`;

export const LandingQue = styled.div`
  width: 67vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QueryLeft = styled.div``;

export const QueryLeftTop = styled.div``;

export const QueryMent = styled.p`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: 58px;
  font-weight: 700;
  margin: 0;
`;

export const QueryLeftMid = styled.div`
  padding: 30px 0px 10px 0px;
`;

export const QueryMidMent = styled.p`
  margin: 0;
  line-height: 25px;
  color: ${({ theme }) => theme.color.grey800};
  font-size: 19px;
`;
export const QueryLeftBottom = styled.p`
  padding-top: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.mainYellow};
`;

export const QueryRight = styled.div``;

export const QueryProfile = styled.img`
  background-color: white;
  padding: 5px;
  border-radius: 100px;
`;
export const QueryProfileY = styled.img`
  background-color: ${({ theme }) => theme.color.lightYellow};
  padding: 12px;
  border-radius: 100px;
`;

export const Question = styled.div`
  padding: 13px 0px;
  display: flex;
  justify-content: right;
`;
export const QuestionY = styled.div`
  padding: 13px 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
  right: 120px;
`;

export const QuestionMe = styled.p`
  box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.color.lightYellow};
  color: white;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 18px;
  line-height: 25px;
  position: relative;
  right: 10px;
`;

export const QuestionGpt = styled.p`
  position: relative;
  left: 10px;
  background-color: white;
  box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color.lightGrey};
  padding: 20px;
  border-radius: 20px;
  font-size: 18px;
  line-height: 25px;
`;
