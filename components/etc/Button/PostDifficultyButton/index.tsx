import React from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { PostInfoOptionState } from "@/atoms/Post/PostInfoOption";
import { difficultyText } from "@/components/Post/PostInfoOption";
import { VscTriangleDown } from "react-icons/vsc";
import { Difficulty } from "@/types/Post/Difficulty";

const difficultyList: Difficulty[] = [
  "VERY_EASY",
  "EASY",
  "MEDIUM",
  "HARD",
  "VERY_HARD",
];

function PostDifficultyButton() {
  const [options, setOptions] = useRecoilState(PostInfoOptionState);
  const { difficulty } = options;
  return (
    <>
      <S.PostDifficultyWrap>
        <S.PostDifficultyButton>
          {difficultyText[difficulty]}&nbsp;
          <VscTriangleDown size={15} />
        </S.PostDifficultyButton>
        {difficultyList
          .filter((item: Difficulty) => item !== difficulty)
          .map((item: Difficulty, index: number) => {
            return (
              <S.PostDifficultyButton
                key={index}
                onClick={() => {
                  setOptions((prev) => ({ ...prev, difficulty: item }));
                }}
              >
                {difficultyText[item]}
              </S.PostDifficultyButton>
            );
          })}
      </S.PostDifficultyWrap>
    </>
  );
}

export default PostDifficultyButton;
