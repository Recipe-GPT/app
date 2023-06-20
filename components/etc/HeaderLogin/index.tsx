import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { getLogoutMutation, getRefreshTokenMutation } from "@/utils/apis/auth";
import { useMutation, useQuery } from "react-query";
import { getMyInfo, getMyInfoQuery } from "@/utils/apis/user";
import { instance } from "@/utils/instance";
import { AxiosError, InternalAxiosRequestConfig } from "axios";

function HeaderLogin() {
  const { pathname } = useRouter();
  const [mount, setMount] = useState(false);

  const getRefreshTokenFunc = getRefreshTokenMutation();

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const myInfoQuery = getMyInfoQuery(mount);
  const getRefreshToken = async (): Promise<string | void> => {
    try {
      getRefreshTokenFunc.mutate();
      console.log(getRefreshTokenFunc);
      if (getRefreshTokenFunc.data?.accessToken !== undefined) {
        localStorage.setItem(
          "accessToken",
          getRefreshTokenFunc.data?.accessToken,
        );
      }
      return getRefreshTokenFunc.data?.accessToken;
    } catch (e) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };
  instance.interceptors.response.use(
    (res) => res,
    (err: AxiosError): Promise<AxiosError> => {
      if (!localStorage.refreshToken) {
        return Promise.reject(err);
      }
      const { config, response } = err;
      const originalRequest = config as InternalAxiosRequestConfig;
      if (response?.status !== 401) {
        return Promise.reject(err);
      }

      const accessToken = getRefreshToken();

      // if (accessToken) {
      //   originalRequest.headers.token = accessToken;
      //   return instance(originalRequest);
      // }

      return Promise.reject(err);
    },
  );

  const logoutMutation = getLogoutMutation();

  if (mount && localStorage.accessToken && myInfoQuery.isSuccess) {
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
  } else if (mount && localStorage.accessToken && myInfoQuery.isLoading) {
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
