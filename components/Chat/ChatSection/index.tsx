import React from "react";
import * as S from "./style";
import Image from "next/image";
import ChatInput from "../ChatInput";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { useRecoilState } from "recoil";
import { IoClose } from "react-icons/io5";

function ChatSection() {
  const [materialList, setMaterialList] = useRecoilState(MaterialListState);
  return (
    <S.ChatSection>
      <S.ChatWrap>
        <Image
          alt="Recpie GPT 아이콘"
          src="./images/YellowLogo.svg"
          width={40}
          height={40}
        />
        <S.ContentWrap>
          <S.GreedingContent>
            환영합니다! 음식에 들어갔으면 하는 재료를 입력해주세요.
          </S.GreedingContent>
          <S.Content>
            <S.ShortContentLabel>재료 :</S.ShortContentLabel>
            <S.MaterialWrap>
              {materialList["INGREDIENT"].map(
                (item: { name: string; isHover: boolean }, index: number) => {
                  return (
                    <div
                      onMouseOver={() =>
                        setMaterialList((prev) => ({
                          ...prev,
                          ["INGREDIENT"]: [
                            ...prev["INGREDIENT"].slice(0, index),
                            {
                              name: prev["INGREDIENT"][index].name,
                              isHover: true,
                            },
                            ...prev["INGREDIENT"].slice(
                              index + 1,
                              prev["INGREDIENT"].length,
                            ),
                          ],
                        }))
                      }
                      onMouseLeave={() =>
                        setMaterialList((prev) => ({
                          ...prev,
                          ["INGREDIENT"]: [
                            ...prev["INGREDIENT"].slice(0, index),
                            {
                              name: prev["INGREDIENT"][index].name,
                              isHover: false,
                            },
                            ...prev["INGREDIENT"].slice(
                              index + 1,
                              prev["INGREDIENT"].length,
                            ),
                          ],
                        }))
                      }
                    >
                      {item.isHover ? (
                        <S.Material key={index}>
                          <S.Transparent>{item.name}</S.Transparent>
                          <S.CloseButton />
                        </S.Material>
                      ) : (
                        <S.Material key={index}>{item.name}</S.Material>
                      )}
                    </div>
                  );
                },
              )}
            </S.MaterialWrap>
          </S.Content>
          <S.Content>
            <S.ContentLabel>조미료 :</S.ContentLabel>
            <S.MaterialWrap>
              {materialList["SEASONING"].map(
                (item: { name: string; isHover: boolean }, index: number) => {
                  return (
                    <div
                      onMouseOver={() =>
                        setMaterialList((prev) => ({
                          ...prev,
                          ["SEASONING"]: [
                            ...prev["SEASONING"].slice(0, index),
                            {
                              name: prev["SEASONING"][index].name,
                              isHover: true,
                            },
                            ...prev["SEASONING"].slice(
                              index + 1,
                              prev["SEASONING"].length,
                            ),
                          ],
                        }))
                      }
                      onMouseLeave={() =>
                        setMaterialList((prev) => ({
                          ...prev,
                          ["SEASONING"]: [
                            ...prev["SEASONING"].slice(0, index),
                            {
                              name: prev["SEASONING"][index].name,
                              isHover: false,
                            },
                            ...prev["SEASONING"].slice(
                              index + 1,
                              prev["SEASONING"].length,
                            ),
                          ],
                        }))
                      }
                    >
                      {item.isHover ? (
                        <S.Material key={index}>
                          <S.Transparent>{item.name}</S.Transparent>
                          <S.CloseButton />
                        </S.Material>
                      ) : (
                        <S.Material key={index}>{item.name}</S.Material>
                      )}
                    </div>
                  );
                },
              )}
            </S.MaterialWrap>
          </S.Content>
        </S.ContentWrap>
      </S.ChatWrap>
      <ChatInput />
    </S.ChatSection>
  );
}

export default ChatSection;
