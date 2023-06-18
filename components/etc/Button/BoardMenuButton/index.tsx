import React, { useRef, useState } from "react";
import * as S from "./style";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { VscTriangleDown } from "react-icons/vsc";
import { useOnClickOutside } from "usehooks-ts";
import { useRecoilState } from "recoil";
import { SortedByState } from "@/atoms/Board/SortedBy";
import { SearchState } from "@/atoms/Board/Search";
import { getSearchBoardQuery } from "@/utils/apis/board";

export type SortedByType = "RECENT" | "POPULAR";

type TextOfSortedByType = {
  [key in SortedByType]: string;
};

const textOfSortedBy: TextOfSortedByType = {
  RECENT: "최신순",
  POPULAR: "인기순",
};

const sortedByList: SortedByType[] = ["RECENT", "POPULAR"];

function BoardMenuButton() {
  const [search, setSearch] = useRecoilState(SearchState);
  const getSearchBoardFunc = getSearchBoardQuery(search);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortedBy, setSortedBy] = useRecoilState<SortedByType>(SortedByState);

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      {isOpen ? (
        <>
          <span></span>
          <S.MenuActiveWrap ref={ref}>
            <S.MenuActiveButton
              isActive
              onClick={() => {
                setSortedBy(sortedBy);
                setIsOpen((prev) => !prev);
                getSearchBoardFunc.mutate();
              }}
            >
              {textOfSortedBy[sortedBy]}&nbsp;
              <VscTriangleDown size={15} />
            </S.MenuActiveButton>
            {sortedByList
              .filter((item: SortedByType) => item !== sortedBy)
              .map((item: SortedByType, index: number) => {
                return (
                  <S.MenuActiveButton
                    key={index}
                    onClick={() => {
                      setSortedBy(item);
                      setIsOpen((prev) => !prev);
                      getSearchBoardFunc.mutate();
                    }}
                  >
                    {textOfSortedBy[item]}
                  </S.MenuActiveButton>
                );
              })}
          </S.MenuActiveWrap>
        </>
      ) : (
        <S.BoardMenuButton onClick={() => setIsOpen((prev) => !prev)}>
          <CgArrowsExchangeAltV size={40} />
          {textOfSortedBy[sortedBy]}
        </S.BoardMenuButton>
      )}
    </>
  );
}

export default BoardMenuButton;
