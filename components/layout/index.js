import React from "react";

import { useState, useEffect } from "react";
import Router from "next/router";
import Header from "../header";
import Footer from "../footer";
import PageLoading from "../ssr-loading";

const Layout = ({ children }) => {
  const [loading, setIsLoading] = useState(false);

  // for loading state on route change
  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <div className="main-container">
      <Header />
      <div className="main-contents">{children}</div>
      {/* <Footer /> */}

      {/* page loading  */}
      {/* {loading && <PageLoading />} */}
    </div>
  );
};

export default Layout;
