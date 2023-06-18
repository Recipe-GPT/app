import React from "react";
import * as S from "./style";
import { AiFillFire } from "react-icons/ai";
import BoardItem from "../BoardItem";
import {
  getRecommendBoardQuery,
  getTrendingBoardQuery,
} from "@/utils/apis/board";

function BoardSection({ isYellow }: { isYellow?: true }) {
  const getTrendingFunc = getTrendingBoardQuery();
  const getRecommendFunc = getRecommendBoardQuery();
  if (getTrendingFunc.isSuccess && getRecommendFunc.isSuccess) {
    return (
      <S.BoardSection isYellow={isYellow}>
        <S.Title isYellow={isYellow}>
          {isYellow ? (
            <>
              최근 떠오르는 레시피
              <AiFillFire color="#FFFFFF" />
            </>
          ) : (
            <span>
              이런 <S.Emphasis>레시피</S.Emphasis> 어떠세요?
            </span>
          )}
        </S.Title>
        <S.BoardWrap>
          {getTrendingFunc.data?.list.length &&
          getRecommendFunc.data?.list.length ? (
            isYellow ? (
              <>
                {getTrendingFunc.data?.list.map((item: BoardType) => {
                  return <BoardItem data={item} />;
                })}
              </>
            ) : (
              <>
                {getRecommendFunc.data?.list.map((item: BoardType) => {
                  return <BoardItem data={item} />;
                })}
              </>
            )
          ) : (
            <></>
          )}
        </S.BoardWrap>
      </S.BoardSection>
    );
  }
  return<></>;
}

export default BoardSection;
