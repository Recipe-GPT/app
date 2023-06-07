import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useMutation, useQuery } from "react-query";
import { getMyInfo } from "@/utils/apis/user";
import { useRouter } from "next/router";
import { getLogout } from "@/utils/apis/auth";

function HeaderLogin() {
  const { pathname } = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const getMyInfoQuery = useQuery("myInfo", getMyInfo, {
    enabled: mount,
  });

  const logoutMutation = useMutation(getLogout, {
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
    },
  });
  
  if (mount && localStorage.accessToken && getMyInfoQuery.isSuccess) {
    return (
      <>
        {
          <S.ProfileImg
            src={getMyInfoQuery.data?.imageUrl}
            alt="프로필 사진"
            width={50}
            height={50}
            onClick={() => logoutMutation.mutate()}
          />
        }
      </>
    );
  } else if (mount && localStorage.accessToken && getMyInfoQuery.isLoading) {
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
