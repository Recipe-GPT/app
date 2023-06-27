import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import QueryContainer from "@/components/etc/QueryContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryContainer Component={<Component {...pageProps} />} />
    </RecoilRoot>
  );
}
