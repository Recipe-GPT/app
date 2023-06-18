import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as CS from "@/components/Chat/ChatSection/style";
import ChatResultInput from "../ChatResultInput";
import ChatResultRecipe from "../ChatResultRecipe";
import { ChatListType } from "@/types/Chat/ChatList";
import ChatDetailSection from "@/components/ChatDetail/ChatDetailSection";
import GoToTopButton from "@/components/etc/Button/GoToTopButton";
function ChatResultSection({ data }: { data: ChatListType }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CS.ChatSection>
        <CS.ChatWrap>
          <CS.ContentWrap>
            <CS.Content>
              <CS.ShortContentLabel>
                재료 :{" "}
                <S.Material>
                  {data.list[0].requestedIngredients.join(", ")}
                </S.Material>
              </CS.ShortContentLabel>
            </CS.Content>
            <CS.Content>
              <CS.ContentLabel>
                조미료 :{" "}
                <S.Material>
                  {data.list[0].requestedSeasonings.join(", ")}
                </S.Material>
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
        <ChatResultInput
          data={data.list[0].recommendRecipe}
          isScroll={scrollPosition > 0}
        />
      </CS.ChatSection>
      {data.list[0].selectedRecipe.map((data) => {
        return (
          <>
            <ChatDetailSection data={data} />
          </>
        );
      })}
      <GoToTopButton isScroll={scrollPosition > 0} />
    </>
  );
}

export default ChatResultSection;
