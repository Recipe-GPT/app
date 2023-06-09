import RecipeButton from "@/components/etc/Button/RecipeButton";
import Footer from "@/components/etc/Footer";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LandingShareItem from "../LandingShareItem";
import * as S from "./style";

function LandingContents() {
  return (
    <>
      <S.LandingContents>
        <S.MainWrapper>
          <S.Title>Recipe GPT</S.Title>
          <div>
            <S.Description>가지고 있는 재료로</S.Description>
            <S.Description>요리할 수 있는 레시피를</S.Description>
            <S.Description>확인해보세요!</S.Description>
          </div>
          <RecipeButton>레시피 확인하기</RecipeButton>
        </S.MainWrapper>
        <S.Fryfan
          src="./images/Frypan.svg"
          alt="프라이팬 사진"
          width={650}
          height={650}
        />
        <S.SectionWrapper>
          <S.SectionTitle color="black">
            마음에 드는 레시피를 선택하세요!
          </S.SectionTitle>
          <S.Chat>
            <S.ChatItem>
              <S.ChatUserIcon
                src="./images/Face.svg"
                alt="유저 아이콘"
                width={50}
                height={50}
              />
              <S.ChatBox direction="left">
                김치, 감자, 피망, 돼지고기로 만들 수 있는 요리 추천해줘
              </S.ChatBox>
            </S.ChatItem>
            <S.ChatItem isRight>
              <S.ChatBox direction="right">
                김치, 감자, 피망, 돼지고기를 사용하여 만들 수 있는 대표적인
                요리들을 몇 가지 소개해드리겠습니다. 마음에 드시는 요리를
                선택해주세요!
                <br />
                1. 김치 감자 피망 돼지고기 볶음
                <br />
                <S.ChatDescription>
                  감자와 피망을 굵게 썬 후 돼지고기와 함께 볶은 뒤 김치를 넣고
                  볶습니다.
                </S.ChatDescription>
                2. 김치 감자 피망 돼지고기 전
                <br />
                <S.ChatDescription>
                  감자와 피망, 김치를 다져 돼지고기와 함께 새콤한 전을 만들어
                  먹습니다.
                </S.ChatDescription>
              </S.ChatBox>
              <S.ChatUserIcon
                src="./images/GPTIcon.svg"
                alt="유저 아이콘"
                width={50}
                height={50}
              />
            </S.ChatItem>
          </S.Chat>
        </S.SectionWrapper>
        <S.ShareWrapper>
          <S.ShareHeadWrapper>
            <S.SectionTitle color="white">
              서로의 레시피를 공유해보세요!
            </S.SectionTitle>
            <RecipeButton>레시피 둘러보기</RecipeButton>
          </S.ShareHeadWrapper>
          <Fade cascade duration={1000} triggerOnce>
            <LandingShareItem index={0} />
            <LandingShareItem index={1} />
            <LandingShareItem index={2} />
          </Fade>
        </S.ShareWrapper>
        <Footer />
      </S.LandingContents>
    </>
  );
}

export default LandingContents;
