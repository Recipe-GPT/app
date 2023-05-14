import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  return (
    <>
      <S.Header>
        <S.NavLeft>
          <S.Logo
            src="./images/Logo.svg"
            alt="레시피 GPT 로고"
            width={57}
            height={40}
          />
          <S.Navbar>
            <S.NavItem
              active={pathname === "/"}
              landing={pathname === "/"}
              href="/"
            >
              서비스 소개
            </S.NavItem>
            <S.NavItem
              active={pathname === "/question"}
              landing={pathname === "/"}
              href="/question"
            >
              질문하기
            </S.NavItem>
            <S.NavItem
              active={pathname === "/board"}
              landing={pathname === "/"}
              href="/board"
            >
              커뮤니티
            </S.NavItem>
          </S.Navbar>
        </S.NavLeft>
        <S.Login href="/login" landing={pathname === "/"}>
          로그인
        </S.Login>
      </S.Header>
    </>
  );
}

export default Header;
