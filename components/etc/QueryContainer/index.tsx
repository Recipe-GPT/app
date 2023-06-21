import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globals";
import { useSetRecoilState } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/etc/Layout";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { isLoadingState } from "@/atoms/Etc/isLoading";
import { ReactNode } from "react";

function QueryContainer({ Component }: { Component: ReactNode }) {
  const setIsLoading = useSetRecoilState(isLoadingState);
  const errorBoundary = (error: unknown) => {
    const axiosError = error as AxiosError<{
      message: string;
      field?: { [key: string]: string };
    }>;
    if (!!axiosError.response?.data.field) {
      Object.values(axiosError.response?.data.field).forEach((message) =>
        toast.error(message),
      );
    } else {
      toast.error(axiosError?.response?.data?.message);
    }
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        onError: (error: unknown) => {
          errorBoundary(error);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      },
      mutations: {
        retry: false,
        onError: (error: unknown) => {
          errorBoundary(error);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {Component}
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default QueryContainer;
