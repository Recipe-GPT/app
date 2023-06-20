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

const returnToken = (mount: boolean) => {
  if (mount) {
    return localStorage.refreshToken;
  }
};

export const getRefreshToken = async (mount: boolean) => {
  return (
    await instance.post("oauth/refresh", {
      refreshToken: returnToken(mount),
    })
  ).data;
};

export const getRefreshTokenMutation = (mount: boolean) => {
  return useMutation(() => getRefreshToken(mount), {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    retry: true,
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
