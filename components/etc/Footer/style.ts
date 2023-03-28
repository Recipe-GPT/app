import styled from "styled-components";

export const Footer = styled.footer`
  width: calc(100% - 200px);
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.mainGrey};
  font-weight: 600;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`