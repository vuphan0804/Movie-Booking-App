import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // setInterval(() => {
    // }, []);
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    setUser(user);
  }, 5000);

  const logout = () => {
    return localStorage.removeItem("user");
  };

  if (!user) {
    return (
      <div className="text-base">
        <Link to="/login" className="m-3">
          Login
        </Link>
        <span className="">|</span>
        <Link to="/register" className="m-3">
          Sign Up
        </Link>
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex items-center text-base">
        <div className="flex items-center">
          <Link to="/admin" className="mr-4">
            Admin
          </Link>
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://picsum.photos/200/300"
            alt=""
          />
          <p className="text-lg font-medium">{user.hoTen}</p>
        </div>
        <Link to="/" className="ml-4" onClick={logout}>
          Logout
        </Link>
      </div>
    );
  }
};

export default Account;
