import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./Account";
import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  const goToMovie = () => {
    navigate(`/`);
  };
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const fixedClass = window.scrollY >= 100 ? "!h-12" : "";
    setHeaderFixed(fixedClass);
  };

  const classes = `w-full px-24 !bg-secondary text-center fixed z-50 top-0 shadow-md shadow-indigo-500/40 transition-all duration-500 ease-in-out h-16 ${headerFixed}`;
  return (
    <div className={`${classes} flex justify-between items-center`}>
      <div className="">
        <a
          path="/"
          className="text-3xl text-orange-600"
          onClick={() => goToMovie()}
        >
          <img className="w-20 h-10" src="/logo.png" alt="" />
        </a>
      </div>
      <Menu />
      <Account />
    </div>
  );
};

export default Header;
