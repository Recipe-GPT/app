import { isLoadingState } from "@/atoms/Etc/isLoading";
import React from "react";
import { useRecoilState } from "recoil";
import Header from "../Header";
import Loading from "../Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  console.log(isLoading);
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
    </>
  );
}

export default Layout;
