import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Sidebar from "../etc/Sidebar";
import ChatDetailSection from "./ChatDetailSection";

function ChatDetail() {
  return (
    <>
      <Header isGrey/>
      <Sidebar />
      <ChatDetailSection />
    </>
  );
}

export default ChatDetail;
