import styled from "styled-components";

export const LandingQuery = styled.div`
  background: ${({ theme }) => theme.color.serveYellow};
  height: 53vh;
  position: relative;
`;

export const LandingQue = styled.div`
  width: 67vw;
  margin: 0 auto;
  position: relative;
  top: 100px;
`;

export const QueryLeft = styled.div``;

export const QueryMent = styled.p`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: 50px;
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
  color: ${({ theme }) => theme.color.mainYellow};
`;
