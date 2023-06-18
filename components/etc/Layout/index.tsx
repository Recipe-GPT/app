import { isLoadingState } from "@/atoms/Etc/isLoading";
import React from "react";
import { useRecoilState } from "recoil";
import Header from "../Header";
import Loading from "../Loading";

function Layout() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  console.log(isLoading);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
    </>
  );
}

export default Layout;
