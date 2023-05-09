import Image from "next/image";
import styled from "styled-components";

export const LandingContents = styled.div`
  backdrop-filter: blur(20px);
  position: absolute;
  /* position: relative; */
  left: 50%;
  width: calc(100% - 200px);
  top: 100px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px 50px 0px 0px;
  padding: 9.5rem 6.5rem;
  padding-bottom: 0;
  height: calc(200vh + 1100px);
`;


export const MainWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  height: calc(100vh - 9.5rem - 100px);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
  letter-spacing: -0.9px;
`;

export const Description = styled.h3`
  margin: 0;
  letter-spacing: -0.9px;
  font-weight: bold;
  color: white;
  font-size: 3rem;
`;

export const Fryfan = styled(Image)`
  position: absolute;
  top: 0;
  right: calc(-10rem + 100px);
  /* right: -10rem; */
`;

export const SectionWrapper = styled.div`
  /* padding: 9.5rem 0; */
  min-height: 90vh;
  position: relative;
`;

export const SectionTitle = styled.h1<{ color: string;  }>`
  color: ${({ color }) => color};
  font-size: 3rem;
  position: relative;
  z-index: 50;
  margin-top: 10vh;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  width: 60rem;
`;

export const ChatItem = styled.div<{ isRight?: boolean }>`
  display: flex;
  gap: 2rem;
  justify-content: ${({ isRight }) => isRight && "end"};
`;

export const ChatUserIcon = styled(Image)``;

export const ChatBox = styled.div<{ direction: string }>`
  background-color: ${({ theme }) => theme.color.mainYellow};
  padding: 1.25rem 2.5rem;
  border-radius: ${({ direction }) =>
    direction === "left" ? "0 20px 20px 20px" : "20px 0 20px 20px"};
  font-size: 1.25rem;
  max-width: 50rem;
  line-height: 3rem;
`;

export const ChatDescription = styled.p`
  width: 100%;
  padding-left: 2rem;
  margin: 0;
`;

export const ShareWrapper = styled(SectionWrapper)`
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 3.5rem;
`

export const ShareHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  /* top: 10vh; */
`;
