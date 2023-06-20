import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useQuery } from "react-query";

export const getMyInfo = async () => {
  return (await instance.get("member", getAccessToken())).data;
};

export const getMyInfoQuery = (mount: boolean) => {
  return useQuery("myInfo", getMyInfo, {
    enabled: mount && !!localStorage.accessToken,
    staleTime: Infinity,
    retry: false,
  });
};
