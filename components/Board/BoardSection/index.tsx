import React from "react";
import * as S from "./style";
import { AiFillFire } from "react-icons/ai";
import BoardItem from "../BoardItem";
import {
  getRecommendBoardQuery,
  getTrendingBoardQuery,
} from "@/utils/apis/board";
import { useRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";
import BoardItemSkeleton from "../BoardItemSkeleton";

function BoardSection({ isYellow }: { isYellow?: true }) {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const getTrendingFunc = getTrendingBoardQuery();
  const getRecommendFunc = getRecommendBoardQuery();

  const lengthCheckedArray = (array: BoardType[]) => {
    return array.length >= 4 ? array.slice(0, 4) : array;
  };

  if (getRecommendFunc.isLoading || getTrendingFunc.isLoading) {
    setIsLoading(true);
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
          {[...Array(4)].map((item) => {
            return <BoardItemSkeleton />;
          })}
        </S.BoardWrap>
      </S.BoardSection>
    );
  }
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
                {lengthCheckedArray(getTrendingFunc.data?.list).map(
                  (item: BoardType) => {
                    return <BoardItem data={item} />;
                  },
                )}
              </>
            ) : (
              <>
                {lengthCheckedArray(getRecommendFunc.data?.list).map(
                  (item: BoardType) => {
                    return <BoardItem data={item} />;
                  },
                )}
              </>
            )
          ) : (
            <></>
          )}
        </S.BoardWrap>
      </S.BoardSection>
    );
  }
  return <></>;
}

export default BoardSection;
