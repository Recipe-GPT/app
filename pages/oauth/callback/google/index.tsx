import { getLoginQuery } from "@/utils/apis/auth";
import { useRouter } from "next/router";
function google() {
  const router = useRouter();
  const code = router.query?.code as string;
  const loginQuery = getLoginQuery(code, router);
  switch (loginQuery.status) {
    case "success":
      const { accessToken, refreshToken } = loginQuery.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      router.push("/");
      return;
    default:
      return;
  }
}

export default google;
