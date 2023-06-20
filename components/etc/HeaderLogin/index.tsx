import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { getLogoutMutation, getRefreshTokenMutation } from "@/utils/apis/auth";
import { getMyInfoQuery } from "@/utils/apis/user";
import { instance } from "@/utils/instance";
import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useSetRecoilState } from "recoil";
import { isNeedLoginState } from "@/atoms/Etc/isNeedLogin";

function HeaderLogin() {
  const { pathname, push } = useRouter();
  const [mount, setMount] = useState(false);
  const setIsNeedLogin = useSetRecoilState(isNeedLoginState);

  const getRefreshTokenFunc = getRefreshTokenMutation(mount);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const myInfoQuery = getMyInfoQuery();
  const getRefreshToken = async (): Promise<string | void> => {
    try {
      if (mount) {
        myInfoQuery.refetch();
        getRefreshTokenFunc.mutate();
      }
      if (getRefreshTokenFunc.data?.accessToken !== undefined) {
        localStorage.setItem(
          "accessToken",
          getRefreshTokenFunc.data?.accessToken,
        );
      }
      // return getRefreshTokenFunc.data?.accessToken;
    } catch (e) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };
  instance.interceptors.response.use(
    (res) => res,
    (err: AxiosError): Promise<AxiosError> => {
      if (mount && !localStorage.refreshToken) {
        setIsNeedLogin(true);
        return Promise.reject(err);
      }
      const { config, response } = err;
      const originalRequest = config as InternalAxiosRequestConfig;
      if (response?.status !== 401) {
        setIsNeedLogin(true);
        return Promise.reject(err);
      }

      getRefreshToken();

      // if (accessToken) {
      //   originalRequest.headers.token = accessToken;
      //   return instance(originalRequest);
      // }

      return Promise.reject(err);
    },
  );

  const logoutMutation = getLogoutMutation();

  if (
    mount &&
    typeof window !== "undefined" &&
    localStorage.getItem("accessToken") &&
    myInfoQuery.isSuccess
  ) {
    return (
      <>
        {
          <S.ProfileImg
            src={myInfoQuery.data?.imageUrl}
            alt="프로필 사진"
            width={50}
            height={50}
            onClick={() => logoutMutation.mutate()}
          />
        }
      </>
    );
  } else if (
    mount &&
    typeof window !== "undefined" &&
    localStorage.getItem("accessToken") &&
    myInfoQuery.isLoading
  ) {
    return <></>;
  } else if (mount) {
    return (
      <S.Login
        pageName={pathname}
        href="https://recipe-api.bssm.kro.kr/oauth2/authorization/google"
      >
        로그인
      </S.Login>
    );
  }
  return <></>;
}

export default HeaderLogin;
