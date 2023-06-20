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
    if (localStorage.accessToken) {
      myInfoQuery.refetch();
    }
    return () => setMount(false);
  }, []);

  const myInfoQuery = getMyInfoQuery();
  const getRefreshToken = () => {
    try {
      getRefreshTokenFunc.mutate();
      return getRefreshTokenFunc.data?.accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  instance.interceptors.response.use(
    (res) => res,
    async function (error) {
      const originalRequest = error.config;

      // 에러 응답이 401 (Unauthorized)이고 originalRequest에 refreshToken이 없는 경우
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // refreshToken을 사용하여 새로운 accessToken을 발급받는 API 호출
        const refreshToken = localStorage.refreshToken;
        const response = await instance.post("oauth/refresh", {
          refreshToken,
        });

        // 새로운 accessToken을 받아온 경우
        if (response.status === 200) {
          const accessToken = response.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          originalRequest.headers.token = accessToken;
          return instance(originalRequest);
        }
      }

      // 그 외의 에러 응답 처리
      setIsNeedLogin(true)
      return Promise.reject(error);
    },
  );

  const logoutMutation = getLogoutMutation();

  if (mount && localStorage.getItem("accessToken") && myInfoQuery.isSuccess) {
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
