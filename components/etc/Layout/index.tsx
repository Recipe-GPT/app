import { isLoadingState } from "@/atoms/Etc/isLoading";
import React from "react";
import { useRecoilValue } from "recoil";
import Header from "../Header";
import Loading from "../Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isNeedLoginState } from "@/atoms/Etc/isNeedLogin";
import NeedLoginModal from "../NeedLoginModal";

function Layout() {
  const isLoading = useRecoilValue(isLoadingState);
  const isNeedLogin = useRecoilValue(isNeedLoginState);
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && <Loading />}
      {isNeedLogin && <NeedLoginModal />}
    </>
  );
}

export default Layout;
