import React from "react";
import * as S from "./style";
import { ImMail4, ImGithub } from "react-icons/im";

function Footer() {
  return (
    <>
      <S.Footer>
        <S.FooterText>Recipe GPT</S.FooterText>
        <S.Icons>
          <ImMail4 size={40} />
          <ImGithub size={40} />
        </S.Icons>
      </S.Footer>
    </>
  );
}

export default Footer;
