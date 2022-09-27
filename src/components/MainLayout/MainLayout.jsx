import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import Footer from "components/Footer";

const MainLayout = () => {
  const [buttonToTop, setButtonToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);
    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);
  const handleScrollDown = () => {
    const scrollActiveClass = window.scrollY >= 300 ? "scrollActive" : "";
    setButtonToTop(scrollActiveClass);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout className="!bg-background ">
      <Header />

      <a href="#0" className={`scrollToTop ${buttonToTop}`} onClick={goToTop}>
        <i className="fas fa-angle-up"></i>
      </a>
      <Layout.Content className="my-16">
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="bg-primary">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
