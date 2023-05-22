import React from "react";
import * as S from "./style";
import { MdPeopleAlt } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
function DetailInfor() {
  return (
    <>
      <S.DetailInfor>
        <S.Title>
          <S.MainTitle>매콤한 LA갈비</S.MainTitle>
          <S.Description>매콤하면서 달달한 간단하게 만드는 LA 갈비</S.Description>
        </S.Title>
        <S.ImageDiv>
          <S.FoodImage
            src="../images/Food.svg"
            alt="음식 사진"
            width={700}
            height={533}
          />
        </S.ImageDiv>
        <S.Infor>
          <S.InforDiv>
            <S.InforIcon>
              <MdPeopleAlt />
            </S.InforIcon>
            <p>2인분</p>
          </S.InforDiv>
          <S.InforDiv>
            <S.InforIcon>
              <BiTimeFive />
            </S.InforIcon>
            <p>900</p>
          </S.InforDiv>
          <S.InforDiv>
            <S.InforIcon>
              <AiTwotoneStar />
            </S.InforIcon>
            <p>어려움</p>
          </S.InforDiv>
        </S.Infor>
      </S.DetailInfor>
    </>
  );
}

export default DetailInfor;
