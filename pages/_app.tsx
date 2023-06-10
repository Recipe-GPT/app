import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globals";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/etc/Header";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <Header />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
