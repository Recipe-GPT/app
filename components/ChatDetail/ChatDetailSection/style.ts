import { ChatSection } from "@/components/Chat/ChatSection/style";
import styled from "styled-components";

export const ChatDetailSection = styled(ChatSection)`
  padding: 1.5rem 12.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightYellow};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightYellow};
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  /* font-size: 1.25rem; */
  color: ${({ theme }) => theme.color.grey800};
  display: flex;
  justify-content: center;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.div``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RecipeContent = styled(Content)`
  gap: 0;
`;

export const MaterialWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const Material = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MaterialItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MaterialItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MaterialName = styled.span`
  color: black;
`;

export const MaterialCount = styled.span`
  color: ${({ theme }) => theme.color.grey900};
`;

export const StepWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;
