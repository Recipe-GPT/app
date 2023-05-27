import React, { ReactNode, useRef, useState } from "react";
import * as S from "./style";
import { Difficulty } from "@/types/Post/Difficulty";
import { PostInfoOptionState } from "@/atoms/Post/PostInfoOption";
import { useRecoilValue } from "recoil";
import PostDifficultyButton from "@/components/etc/Button/PostDifficultyButton";
import { useOnClickOutside } from "usehooks-ts";

interface PostInfoOptionType {
  icon: ReactNode;
  value: "portion" | "time" | "difficulty";
  children: string;
  up?: () => void;
  down?: () => void;
}

export const difficultyText: { [x in Difficulty]: string } = {
  VERY_EASY: "매우 쉬움",
  EASY: "쉬움",
  MEDIUM: "보통",
  HARD: "어려움",
  VERY_HARD: "매우 어려움",
};

function PostInfoOption({
  icon,
  value,
  children,
  up,
  down,
}: PostInfoOptionType) {
  const options = useRecoilValue(PostInfoOptionState);
  const { portion, time, difficulty } = options;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  const valueText = {
    portion: `${portion}인분`,
    time: `${time}초`,
    difficulty: difficultyText[difficulty],
  };

  return (
    <S.PostInfoOption>
      <S.Icon>{icon}</S.Icon>
      <S.TextWrap
        isButton={!up}
        onClick={() => {
          if (!up) {
            setIsOpen((prev) => !prev);
          }
        }}
        ref={ref}
      >
        {isOpen && <PostDifficultyButton setIsOpen={setIsOpen} />}
        <S.Text>{valueText[value]}</S.Text>
        <S.TriangleWrap>
          {up && <S.Triangle onClick={up} />}
          <S.Triangle isReverse onClick={down} />
        </S.TriangleWrap>
      </S.TextWrap>
      <S.Description>{children}</S.Description>
    </S.PostInfoOption>
  );
}

export default PostInfoOption;
