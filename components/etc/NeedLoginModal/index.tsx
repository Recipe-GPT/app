import React from "react";
import * as S from "./style";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

function NeedLoginModal() {
  return (
    <S.NeedLoginModalBackground>
      <S.NeedLoginModal>
        <S.ModalHeader>
          <Image
            src={"/images/Logo.svg"}
            width={40}
            height={40}
            alt="레시피GPT 로고"
          />
          <S.HeaderTitle>Recipe-GPT</S.HeaderTitle>
        </S.ModalHeader>
        <S.NeedLoginText>로그인이 필요한 서비스입니다.</S.NeedLoginText>
        <S.LoginButton href="https://recipe-api.bssm.kro.kr/oauth2/authorization/google">
          <FcGoogle size={30} />
          <S.LoginButtonText>구글로 로그인하기</S.LoginButtonText>
        </S.LoginButton>
      </S.NeedLoginModal>
    </S.NeedLoginModalBackground>
  );
}

export default NeedLoginModal;
