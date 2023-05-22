import styled from "styled-components";
import Image from "next/image";

export const DetailInfor = styled.div`
  width: 50vw;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.div``;

export const MainTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey800};
  font-size: 1.3rem;
  padding: 3px 0px 13px 0px;
`;

export const ImageDiv = styled.div`
  position: relative;
`;

export const FoodImage = styled(Image)`
border-radius: 20px;
`;

export const Infor = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 60px 30px 60px;
`;

export const InforDiv = styled.div`
  color: ${({ theme }) => theme.color.grey800};
  font-size: 1.3rem;
`;


export const InforIcon = styled.p`
    font-size: 1.8rem;
`;