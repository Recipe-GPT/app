import styled, { css } from "styled-components";
import { NavItem } from "../Header/style";
import Image from "next/image";

export const Login = styled(NavItem)`
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 85px;
  ${({ pageName }) => {
    switch (pageName) {
      case "/chat":
      case "/chat/[recipeId]":
      case "/chat/[recipeId]/[detailId]":
        return css`
          border: 2px solid ${({ theme }) => theme.color.grey600};
        `;
      case "/board":
      case "/board/post":
      case "/":
        return css`
          border: 2px solid ${({ theme }) => theme.color.lightGrey};
        `;
    }
  }}
`;

export const ProfileImg = styled(Image)`
  border-radius: 50%;
`;
