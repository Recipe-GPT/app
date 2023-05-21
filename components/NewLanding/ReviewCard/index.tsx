import React from "react";
import * as S from "./style";
import { AiTwotoneStar } from "react-icons/ai";

function ReviewCard(props: {
  profile: string;
  name: string;
  menu: string;
  star: number;
  review: string;
}) {
  return (
    <S.ReviewCard>
      <S.CardTop>
        <S.CardImage>
          <S.Image src={props.profile} />
        </S.CardImage>
        <S.CardInfo>
          <S.CardName>{props.name}</S.CardName>
          <S.CardMenu>{props.menu}</S.CardMenu>
        </S.CardInfo>
      </S.CardTop>
      <S.CardMid>
        <S.CardStar>
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </S.CardStar>
        <S.CardStarNum>{props.star}</S.CardStarNum>
      </S.CardMid>
      <S.CardBottom>
        <S.CardReview>{props.review}</S.CardReview>
      </S.CardBottom>
    </S.ReviewCard>
  );
}

export default ReviewCard;
