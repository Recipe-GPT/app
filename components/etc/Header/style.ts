import Image from "next/image";
import styled, { css } from "styled-components";
import Link from "next/link";

export const Header = styled.header<{ isGrey?: true; pageName: string }>`
  width: 100%;
  padding: 0 50px;
  position: ${({ isGrey }) => (isGrey ? "fixed" : "absolute")};
  height: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  ${({ pageName }) => {
    switch (pageName) {
      case "/":
      case "/board/post":
        return css`
          background-color: ${({ theme }) =>
            theme.color.serveYellow} !important;
        `;
      case "/chat":
      case "/chat/[recipeId]":
      case "/chat/[recipeId]/[detailId]":
        return css`
          background-color: ${({ theme }) => theme.color.lightGrey};
          position: fixed;
        `;
      case "/oauth/callback/google":
        return css`
          display: none;
        `;
      default:
        return css`
          background-color: white;
        `;
    }
  }}
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const NavItem = styled(Link)<{ pageName: string; pathName?: string }>`
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 33px;
  ${({ pageName }) => {
    switch (pageName) {
      case "/":
        return css`
          color: ${({ theme }) => theme.color.lightGrey} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName === pathName && `2px solid ${theme.color.lightGrey}`};
        `;
      case "/chat":
      case "/chat/[recipeId]":
      case "/chat/[recipeId]/[detailId]":
        return css`
          color: ${({ theme }) => theme.color.grey600} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName?.slice(0, pathName?.length) === pathName &&
            pathName !== "/" &&
            `2px solid ${theme.color.grey600}`};
        `;
      case "/board":
      case "/board/post":
        return css`
          color: ${({ theme }) => theme.color.lightGrey} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName?.slice(0, pathName?.length) === pathName &&
            pathName !== "/" &&
            `2px solid ${theme.color.lightGrey}`};
        `;
      default:
        return css``;
    }
  }}
  &:link {
    text-decoration: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

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
      default:
        return css``;
    }
  }}
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ProfileImg = styled(Image)`
  border-radius: 50%;
`;
