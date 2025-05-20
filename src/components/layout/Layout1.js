"use client";

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AOSInit from "../AOSInit";
const Layout1 = ({ children }) => {
  return (
    <div>
      <AOSInit />
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Layout1;
