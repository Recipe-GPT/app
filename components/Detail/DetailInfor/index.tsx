import React from "react";
import * as S from "./style";
import { MdPeopleAlt } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { Difficulty } from "@/types/Post/Difficulty";
import { difficultyText } from "@/components/Post/PostInfoOption";
function DetailInfor({
  data,
}: {
  data: {
    name: string;
    description: string;
    imageUrl: string;
    difficulty: Difficulty;
    time: number;
    serving: number;
  };
}) {
  return (
    <>
      <S.DetailInfor>
        <S.Title>
          <S.MainTitle>{data?.name}</S.MainTitle>
          <S.Description>{data?.description}</S.Description>
        </S.Title>
        <S.ImageDiv>
          <S.FoodImage
            src={data?.imageUrl}
            alt="음식 사진"
            width={350}
            height={350}
          />
        </S.ImageDiv>
        <S.Infor>
          <S.InforDiv>
            <S.InforIcon>
              <MdPeopleAlt />
            </S.InforIcon>
            <S.InforTitle>{data?.serving}인분</S.InforTitle>
          </S.InforDiv>
          <S.InforDiv>
            <S.InforIcon>
              <BiTimeFive />
            </S.InforIcon>
            <S.InforTitle>{data?.time}</S.InforTitle>
          </S.InforDiv>
          <S.InforDiv>
            <S.InforIcon>
              <AiTwotoneStar />
            </S.InforIcon>
            <S.InforTitle>{difficultyText[data?.difficulty]}</S.InforTitle>
          </S.InforDiv>
        </S.Infor>
      </S.DetailInfor>
    </>
  );
}

export default DetailInfor;
