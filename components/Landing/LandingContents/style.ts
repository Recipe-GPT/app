import Image from "next/image";
import styled from "styled-components";

export const LandingContents = styled.div`
  backdrop-filter: blur(20px);
  position: absolute;
  left: 50%;
  width: calc(100% - 300px);
  top: 100px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px 50px 0px 0px;
  padding: 9.5rem 6.5rem;
`;

export const MainWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  height: calc(100vh - 9.5rem);
`;

export const Title = styled.h1`
  font-size: 4.5rem;
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
  font-size: 4rem;
`;

export const Fryfan = styled(Image)`
  position: absolute;
  top: 0;
  right: -10rem;
`;

export const ChatWrapper = styled.div`
  /* padding-right: */
  padding: 9.5rem 0;
  height: 100vh;
`;

export const SectionTitle = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 3rem;
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
  font-size: 1.5rem;
  max-width: 50rem;
  line-height: 3rem;
`;

export const ChatDescription = styled.p`
  width: 100%;
  padding-left: 2rem;
  margin: 0;
`
