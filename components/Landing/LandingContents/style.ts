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
`

export const Fryfan = styled(Image)`
  position: absolute;
  top: 0;
  right: -10rem;
`;