import { getLogin } from "@/utils/apis/auth";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

function google() {
  const router = useRouter();
  const code = router.query?.code;
  const loginQuery = useQuery("login", () => getLogin(code), {
    enabled: router.isReady,
  });
  if (loginQuery.isSuccess) {
    const { accessToken, refreshToken } = loginQuery.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    router.push("/");
  }
  if (loginQuery.isError) {
    console.log(loginQuery);
  }
  return null;
}

export default google;
