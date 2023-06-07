import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";

export const getLogin = async (code: string) => {
  return (await instance.post("oauth", { code })).data;
};

export const getLoginQuery = (code: string, router: any) => {
  return useQuery("login", () => getLogin(code), {
    enabled: router.isReady,
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
