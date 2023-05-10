import Image from "next/image";
import styled from "styled-components";

export const BoardItem = styled.div`
  border-radius: 15px;
  width: 260px;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
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
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* width: 100%; */
  margin: 0;
`;

export const Description = styled.p`
  color: #7d7d8e;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 5px;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.mainYellow};
  font-size: 14px;
`;
