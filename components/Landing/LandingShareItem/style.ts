import styled from "styled-components";
import Image from "next/image";

export const LandingShareItem = styled.div<{ index: number }>`
  position: relative;
  top: ${({ index }) => `${index * 5.75}rem`};
`;

export const FoodImage = styled(Image)`
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 20;
`;

export const ItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2rem;
  padding-top: 6.25rem;
  position: relative;
  bottom: 5.75rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  font-size: 1.5rem;
  z-index: 10;
`;

export const ItemContent = styled.p`
  margin: 0;
  line-height: 200%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.mainGrey};
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemNickname = styled.span`
  font-size: 1.5rem;
  color: #847a75;
`;

export const ItemDate = styled(ItemNickname)`
  font-size: 1.25rem;
`;
