import React from "react";
import * as S from "./style";
import { FiPlus } from "react-icons/fi";

function Sidebar() {
  return (
    <S.Sidebar>
      <S.NewRecipeButton>
        <FiPlus size={20} />
        새로운 레시피
      </S.NewRecipeButton>
      <S.SidebarItemWrap>
        <S.SidebarItem>
          <S.ForkIcon
            width={20}
            height={20}
            src="/images/ForkAndKnife.svg"
            alt="수저 아이콘"
          />
          파인애플 볶음밥
        </S.SidebarItem>
        <S.SidebarItem>
          <S.ForkIcon
            width={20}
            height={20}
            src="/images/ForkAndKnife.svg"
            alt="수저 아이콘"
          />
          투움바 떡볶이
        </S.SidebarItem>
        <S.SidebarItem>
          <S.ForkIcon
            width={20}
            height={20}
            src="/images/ForkAndKnife.svg"
            alt="수저 아이콘"
          />
          하이라이스
        </S.SidebarItem>
      </S.SidebarItemWrap>
    </S.Sidebar>
  );
}

export default Sidebar;
