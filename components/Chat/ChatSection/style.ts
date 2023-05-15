import styled from "styled-components";

export const ChatSection = styled.section`
  padding-top: 5rem;
  padding-left: 16.25rem;
  min-height: 100vh;
`;

export const ChatWrap = styled.div`
  background-color: #fffcf4;
  width: 100%;
  padding: 40px 200px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightYellow};
  display: flex;
  gap: 1.5rem;
`;

export const ContentWrap = styled.div`
  line-height: 2px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  font-size: 1.125rem;
`;

export const GreedingContent = styled(Content)`
  margin-bottom: 10px;
`;
