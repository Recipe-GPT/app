import React, { useState } from "react";
import * as S from "./style";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { VscTriangleDown } from "react-icons/vsc";

type SortedByType = "RECENTLY" | "POPULARITY";

type TextOfSortedByType = {
  [key in SortedByType]: string;
};

const textOfSortedBy: TextOfSortedByType = {
  RECENTLY: "최신순",
  POPULARITY: "인기순",
};

const sortedByList: SortedByType[] = ["RECENTLY", "POPULARITY"];

function BoardMenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortedBy, setSortedBy] = useState<SortedByType>("RECENTLY");
  return (
    <>
      {isOpen ? (
        <>
          <span></span>
          <S.MenuActiveWrap>
            <S.MenuActiveButton
              isActive
              onClick={() => {
                setSortedBy(sortedBy);
                setIsOpen((prev) => !prev);
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
