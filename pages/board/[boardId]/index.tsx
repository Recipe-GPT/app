import React from "react";
import Head from "next/head";
import Detail from "@/components/Detail";

function DetailPage() {
  return (
    <>
      <Head>
        <title>상세페이지</title>
      </Head>
      <Detail />
    </>
  );
}

export default DetailPage;
