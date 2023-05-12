import styled, { css } from "styled-components";

export const Footer = styled.footer<{ isLanding: boolean }>`
  z-index: 100;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  ${({ isLanding }) => {
    if (isLanding) {
      return LandingFooter;
    } else {
      return CommonFooter;
    }
  }}
`;

const LandingFooter = css`
  width: calc(100% - 200px);
  position: absolute;
  bottom: 2.5rem;
  color: ${({ theme }) => theme.color.mainGrey};
`;

const CommonFooter = css`
  width: 100%;
  color: white;
  padding: 3.125rem 9.375rem;
  background-color: ${({ theme }) => theme.color.mainYellow};
`;

export const FooterText = styled.span`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
`;

export const FooterTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Noto Sans", sans-serif;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.span`
  font-size: 1rem;
  font-family: "Noto Sans", sans-serif;
`;

export const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: end;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.a`
  width: 40px;
  height: 40px;
`;

export const MailIcon = styled(Icon)<{ isLanding: boolean }>`
  background-color: ${({ isLanding, theme }) =>
    isLanding ? theme.color.mainGrey : "white"};
  color: ${({ isLanding, theme }) =>
    isLanding ? "#AFBF8C" : theme.color.mainYellow};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
