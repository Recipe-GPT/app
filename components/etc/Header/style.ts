import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  width: calc(100% - 200px);
  position: absolute;
  top: 1.25rem;
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
  font-size: 1.5rem;
  font-weight: bolder;
  mix-blend-mode: difference;
  color: ${({ theme, landing }) =>
    landing ? theme.color.grey600 : theme.color.mainGrey};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: ${({ active, theme, landing }) =>
    active
      ? landing
        ? `2px solid ${theme.color.grey600}`
        : `2px solid ${theme.color.lightGrey}`
      : ""};
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
  height: 40px;
  width: 110px;

  border: ${({ theme, landing }) =>
    landing
      ? `2px solid ${theme.color.grey600}`
      : `2px solid ${theme.color.lightGrey}`};
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 2.25rem;
`;
