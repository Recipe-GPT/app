import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { isNeedLoginState } from "@/atoms/Etc/isNeedLogin";

export const getLogin = async (code: string) => {
  return (await instance.post("oauth", { code })).data;
};

export const getLoginQuery = (code: string, router: NextRouter) => {
  const setIsNeedLogin = useSetRecoilState(isNeedLoginState);
  return useQuery("login", () => getLogin(code), {
    enabled: router.isReady,
    onSuccess: (data) => {
      setIsNeedLogin(false);
      const { accessToken, refreshToken } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      window.history.go(-2);
    },
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
  const setIsNeedLogin = useSetRecoilState(isNeedLoginState);
  return useMutation(() => getRefreshToken(mount), {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: () => {
      setIsNeedLogin(true);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
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
