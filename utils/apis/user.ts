import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";

export const getMyInfo = async () => {
  return (await instance.get("member", getAccessToken())).data;
};
