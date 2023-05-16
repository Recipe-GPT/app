import React from "react";
import * as S from "./style";
import * as CS from "@/components/Chat/ChatSection/style";
import { useRecoilValue } from "recoil";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import ChatInput from "@/components/Chat/ChatInput";
import ChatResultInput from "../ChatResultInput";
import ChatResultRecipe from "../ChatResultRecipe";

function ChatResultSection() {
  const materialList = useRecoilValue(MaterialListState);
  return (
    <>
      <CS.ChatSection>
        <CS.ChatWrap>
          <CS.ContentWrap>
            <CS.Content>
              <CS.ShortContentLabel>
                재료 : <S.MaterialList>파인애플, 밥, 피망</S.MaterialList>
              </CS.ShortContentLabel>
            </CS.Content>
            <CS.Content>
              <CS.ContentLabel>
                조미료 : <S.MaterialList>케첩</S.MaterialList>
              </CS.ContentLabel>
            </CS.Content>
            <CS.Content>
              <CS.ContentLabel>레시피 :</CS.ContentLabel>
            </CS.Content>
            <S.RecipeList>
              <ChatResultRecipe index={1} title="김치 감자 피망 돼지고기 볶음">
                감자와 피망을 굵게 썬 후 돼지고기와 함께 볶은 뒤 김치를 넣고
                볶아줍니다.
              </ChatResultRecipe>
              <ChatResultRecipe index={2} title="돼지고기 김치 찌개">
                돼지고기와 김치를 함께 끓여 매운 김치찌개를 만듭니다. 감자와
                피망을 넣어 더욱 맛을 높일 수 있습니다.
              </ChatResultRecipe>
              <ChatResultRecipe index={3} title="김치 감자 피망 돼지고기 전">
                감자와 피망, 김치를 다져 돼지고기와 함께 새콤한 전을 만들어
                먹습니다.
              </ChatResultRecipe>
            </S.RecipeList>
            <CS.Content>마음에 드시는 요리를 선택하세요!</CS.Content>
          </CS.ContentWrap>
        </CS.ChatWrap>
        <ChatResultInput />
      </CS.ChatSection>
    </>
  );
}

export default ChatResultSection;
