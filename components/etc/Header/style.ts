import Image from "next/image";
import styled from "styled-components";

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
`;

export const Logo = styled(Image)``;

export const NavItem = styled.span`
  font-size: 1.5rem;
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 4rem;
`