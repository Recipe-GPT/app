import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export const getMyInfo = async () => {
  return (await instance.get("member", getAccessToken())).data;
};

export const getMyInfoQuery = () => {
  return useQuery("myInfo", getMyInfo, {
    enabled: false,
    staleTime: Infinity,
    retry: false,
    onError: () => {},
  });
};
