import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter } from "next/router";

export const getLogin = async (code: string) => {
  return (await instance.post("oauth", { code })).data;
};

export const getLoginQuery = (code: string, router: NextRouter) => {
  return useQuery("login", () => getLogin(code), {
    enabled: router.isReady,
  });
};

export const getRefreshToken = async () => {
  return (
    await instance.post("oauth/refresh", {
      refreshToken: localStorage.refreshToken,
    })
  ).data;
};

export const getRefreshTokenMutation = () => {
  return useMutation(getRefreshToken, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
  });
};

export const getLogout = async () => {
  return (
    await instance.delete("logout", {
      data: { refreshToken: localStorage.refreshToken },
      ...getAccessToken(),
    })
  ).data;
};

export const getLogoutMutation = () => {
  return useMutation(getLogout, {
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
    },
  });
};
