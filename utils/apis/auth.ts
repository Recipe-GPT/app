import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";

export const getLogin = async (code: string | string[] | undefined) => {
  return (await instance.post("oauth", { code })).data;
};

export const getLogout = async () => {
  return (
    await instance.delete("logout", {
      data: { refreshToken: localStorage.refreshToken },
      ...getAccessToken(),
    })
  ).data;
};
