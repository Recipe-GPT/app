import styled from "styled-components";
import Image from "next/image";

export const MainBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("./images/MainBackground.svg");
  filter: blur(10px);
  transform: scale(1.03);
`;

// export const MainBackgroundImage = styled(Image)`
//   height: 100vh !important;
//   position: relative !important;
//   filter: blur(10px);
// `;
