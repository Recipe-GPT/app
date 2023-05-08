import styled from "styled-components";

export const Footer = styled.footer`
  width: calc(100% - 200px);
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

export const FooterText = styled.span`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
`;

export const FooterTitle = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.mainGrey};
  font-weight: 700;
  font-family: "Noto Sans", sans-serif;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.span`
  font-size: 1rem;
  color: #505050;
  font-family: "Noto Sans", sans-serif;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: end;
`;
