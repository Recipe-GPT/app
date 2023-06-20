import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globals";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/etc/Layout";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { getRefreshTokenMutation } from "@/utils/apis/auth";

export default function App({ Component, pageProps }: AppProps) {
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
      },
      mutations: {
        retry: false,
        onError: (error: unknown) => {
          errorBoundary(error);
        },
      },
    },
  });
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
