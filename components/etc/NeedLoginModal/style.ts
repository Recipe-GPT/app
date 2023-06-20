import Link from "next/link";
import styled from "styled-components";

export const NeedLoginModalBackground = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NeedLoginModal = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 1.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const NeedLoginText = styled.p`
  font-size: 1.375rem;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0.5rem;
  gap: 1rem;
  border-radius: 0.5rem;
  filter: drop-shadow(#88888888 0 0.2rem 0.2rem);
`;

export const LoginButtonText = styled.span`
  font-size: 1.125rem;
`;
