import Image from 'next/image';
import styled from 'styled-components';

export const LandingChat = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: hidden;
`;

export const Bread = styled(Image)`
  position: relative;
  right: -10rem;
  z-index: 30;
`