import styled from "styled-components";

export const LandingIntro = styled.div`
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.serveYellow};
  height: 100vh;
  position: relative;
`;

export const LandMent = styled.div`
  width: 67vw;
  margin: 0 auto;
  position: relative;
  top: 38vh;
`;

export const LandMentone = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.lightGrey};
  margin: 0;
`;

export const LandBold = styled.p`
  margin: 0;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.lightYellow};
  float: left;
`;
