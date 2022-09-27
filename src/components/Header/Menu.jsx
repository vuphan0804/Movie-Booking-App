import React from "react";

const Menu = () => {
  return (
    <div>
      <ul className="flex justify-between gap-5 font-medium text-lg">
        <li>
          <a href="#movieShowing">Lịch Chiếu</a>
        </li>
        <li>
          <a href="#cinema">Cụm Rạp</a>
        </li>
        <li>
          <a href="#">Giới Thiệu</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
