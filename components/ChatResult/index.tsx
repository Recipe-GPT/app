import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Sidebar from "../etc/Sidebar";
import ChatResultSection from "./ChatResultSection";

function ChatResult() {
  return (
    <>
      <Sidebar />
      <ChatResultSection />
    </>
  );
}

export default ChatResult;
