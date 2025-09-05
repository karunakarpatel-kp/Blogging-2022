"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

const CstmProgressBar = () => {
  return <AppProgressBar height="1px" color="#ffca3c" options={{ showSpinner: true }} shallowRouting />;
};

export default CstmProgressBar;
