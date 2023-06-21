import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export const Loading = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingCircular = styled(CircularProgress)`
  svg {
    color: ${({ theme }) => theme.color.mainYellow};
  }
`;
