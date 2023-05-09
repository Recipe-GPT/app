import React from "react";
import * as S from "./style";
import { ImMail4, ImGithub } from "react-icons/im";

function Footer() {
  return (
    <>
      <S.Footer>
        <S.FooterText>
          <S.FooterTitle>Recipe GPT</S.FooterTitle>
          <S.FooterContents>
            <S.FooterContent>TEL</S.FooterContent>
            <S.FooterContent>+82 2929 0404</S.FooterContent>
            <S.FooterContent>+82 1234 5678</S.FooterContent>
          </S.FooterContents>
          <S.FooterContents>
            <S.FooterContent>Email</S.FooterContent>
            <S.FooterContent>recipegpt@gmail.com</S.FooterContent>
          </S.FooterContents>
        </S.FooterText>
        <S.Icons>
          <S.Icon href="https://github.com/Recipe-GPT">
            <ImMail4 size={40} />
          </S.Icon>
          <S.Icon href="https://github.com/Recipe-GPT">
            <ImGithub size={40} />
          </S.Icon>
        </S.Icons>
      </S.Footer>
    </>
  );
}

export default Footer;
