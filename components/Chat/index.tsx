import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Sidebar from "../etc/Sidebar";
import ChatSection from "./ChatSection";

function Chat() {
  return (
    <>
      <Sidebar />
      <ChatSection />
    </>
  );
}

export default Chat;
