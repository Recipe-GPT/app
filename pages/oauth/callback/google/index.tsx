import { login } from "@/utils/apis/auth";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

function google() {
  const router = useRouter();
  const code = router.query?.code;
  const loginQuery = useQuery("login", () => login(code), {
    enabled: router.isReady,
  });
  console.log(router.query);
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
