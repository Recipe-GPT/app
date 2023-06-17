import React from "react";
import * as S from "./style";
import * as CS from "@/components/Chat/ChatSection/style";
import ChatResultInput from "../ChatResultInput";
import ChatResultRecipe from "../ChatResultRecipe";
import { ChatListType } from "@/types/Chat/ChatList";
function ChatResultSection({ data }: { data: ChatListType }) {
  console.log(data);
  return (
    <>
      <CS.ChatSection>
        <CS.ChatWrap>
          <CS.ContentWrap>
            <CS.Content>
              <CS.ShortContentLabel>
                재료 :{" "}
                <S.MaterialList>
                  {data.list[0].requestedIngredients.join(", ")}
                </S.MaterialList>
              </CS.ShortContentLabel>
            </CS.Content>
            <CS.Content>
              <CS.ContentLabel>
                조미료 :{" "}
                <S.MaterialList>
                  {data.list[0].requestedSeasonings.join(", ")}
                </S.MaterialList>
              </CS.ContentLabel>
            </CS.Content>
            <CS.Content>
              <CS.ContentLabel>레시피 :</CS.ContentLabel>
            </CS.Content>
            <S.RecipeList>
              {data.list[0].recommendRecipe.map((item, index) => {
                return (
                  <ChatResultRecipe
                    key={item.name}
                    index={index}
                    title={item.name}
                    length={data.list[0].recommendRecipe.length}
                    data={{
                      ingredients: item.ingredients,
                      seasonings: item.seasonings,
                    }}
                  >
                    {item.description}
                  </ChatResultRecipe>
                );
              })}
            </S.RecipeList>
            <CS.Content>마음에 드시는 요리를 선택하세요!</CS.Content>
          </CS.ContentWrap>
        </CS.ChatWrap>
        <ChatResultInput data={data.list[0].recommendRecipe} />
      </CS.ChatSection>
    </>
  );
}

export default ChatResultSection;
