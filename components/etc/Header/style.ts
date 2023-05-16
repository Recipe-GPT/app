import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  /* width: calc(100% - 200px); */
  width: 100%;
  padding: 0 100px;
  position: absolute;
  height: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: black; */
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const NavItem = styled(Link)<{ active?: boolean; landing: boolean }>`
  font-size: 1.2rem;
  font-weight: bolder;
  mix-blend-mode: difference;
  color: ${({ theme, landing }) =>
    landing ? theme.color.lightGrey : theme.color.grey600} !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: ${({ active, theme, landing }) =>
    active
      ? landing
        ? `2px solid ${theme.color.lightGrey}`
        : `2px solid ${theme.color.grey600}`
      : ""};
  &:link {
    text-decoration: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const Login = styled(NavItem)`
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 85px;

  border: ${({ theme, landing }) =>
    landing
      ? `2px solid ${theme.color.lightGrey}`
      : `2px solid ${theme.color.grey600}`};
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 2.25rem;
`;
