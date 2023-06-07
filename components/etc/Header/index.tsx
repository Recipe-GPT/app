import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getMyInfo } from "@/utils/apis/user";
import Image from "next/image";
import HeaderLogin from "../HeaderLogin";

function Header({ isGrey }: { isGrey?: true }) {
  const { pathname } = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const getMyInfoQuery = useQuery("myInfo", getMyInfo, {
    enabled: mount,
  });

  console.log(getMyInfoQuery);

  return (
    <>
      <S.Header isGrey={isGrey} pageName={pathname}>
        <S.NavLeft>
          <S.Logo
            src="/images/Logo.svg"
            alt="레시피 GPT 로고"
            width={50}
            height={33}
          />
          <S.Navbar>
            <S.NavItem pageName={pathname} pathName="/" href="/">
              서비스 소개
            </S.NavItem>
            <S.NavItem pageName={pathname} pathName="/chat" href="/chat">
              질문하기
            </S.NavItem>
            <S.NavItem pageName={pathname} pathName="/board" href="/board">
              커뮤니티
            </S.NavItem>
          </S.Navbar>
        </S.NavLeft>
        <HeaderLogin />
      </S.Header>
    </>
  );
}

export default Header;
