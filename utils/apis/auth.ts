import { instance } from "../instance";

export const login = async (code: string | string[] | undefined) => {
  return (await instance.post("oauth", { code })).data;
};
