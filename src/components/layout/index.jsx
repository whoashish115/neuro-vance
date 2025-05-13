'use client'
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";
import AOSProvider from "./AOSProvider";

const Layout = ({ children }) => {
  return (
      <AOSProvider>
    <div className=" min-h-screen flex flex-col ">
      {/* <Preloader /> */}

      <Header />
      <main className="flex-grow mt-[72px] h-full galaxy-wrapper mx-auto  flex flex-col justify-start w-full ">
        {children}
      </main>
      <Footer />
    </div>
      </AOSProvider>
  );
};

export default Layout;