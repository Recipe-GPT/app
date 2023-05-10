import Image from "next/image";
import styled from "styled-components";

export const BoardItem = styled.div`
  border-radius: 15px;
  width: 100%;
  background-color: white;
`;

export const FoodWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  position: relative;
  padding-top: 100%;
`;

export const Food = styled(Image)`
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div`

`