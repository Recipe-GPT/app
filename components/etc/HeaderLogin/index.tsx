import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getMyInfoQuery } from "@/utils/apis/user";
import { useRouter } from "next/router";
import { getLogoutMutation } from "@/utils/apis/auth";

function HeaderLogin() {
  const { pathname } = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const myInfoQuery = getMyInfoQuery(mount);

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
