import React from "react";
import * as S from "./style";

function Header() {
  return (
    <>
      <S.Header>
        <S.Logo
          src="./images/Logo.svg"
          alt="레시피 GPT 로고"
          width={57}
          height={40}
        />
        <S.Navbar>
          <S.NavItem>Recipe GPT</S.NavItem>
          <S.NavItem>커뮤니티</S.NavItem>
        </S.Navbar>
        <S.NavItem>로그인</S.NavItem>
      </S.Header>
    </>
  );
}

export default Header;
