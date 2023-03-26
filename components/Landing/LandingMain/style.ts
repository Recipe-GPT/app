import styled from "styled-components";
import Image from "next/image";

export const MainBackground = styled.div`
  width: 100%;
  position: relative;
`;

export const MainBackgroundImage = styled(Image)`
  height: auto !important;
  position: relative !important;
  filter: blur(10px);
`;

export const BackgroundBlur = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
`;
