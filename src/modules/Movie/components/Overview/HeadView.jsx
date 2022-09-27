import React from "react";
import dayjs from "dayjs";

const HeadView = ({ movie }) => {
  const ngayKhoiChieuFormat = dayjs(movie.ngayKhoiChieu).format("DD.MM.YYYY");

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat md:h-[400px] h-[300px] rounded-bl-2xl relative"
        style={{ backgroundImage: "url(/bg-cinema.jpg)" }}
      >
        <div className="bg-gradient-to-br from-transparent to-black/70 rounded-bl-2xl">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 bottom-[-85%] md:bottom-[-20%] items-start absolute left-1/2 -translate-x-1/2  w-full max-w-[1000px] ">
            <div className="gap-5 px-6">
              <img
                className="w-80 h-80 object-cover rounded-lg z-30"
                src={movie.hinhAnh}
                alt=""
              />
            </div>
            <div className="col-span-2 mt-6 px-6 !text-white">
              <h1 className="text-4xl font-bold !text-white leading-tight">
                {movie.tenPhim}
              </h1>
              <ul className="flex gap-3 flex-wrap md:mt-7 mt-3">
                <li className="mb-3">
                  <a href="" className="btn-info hover-shadow text-xl">
                    {ngayKhoiChieuFormat}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="btn-info text-xl hover-shadow">
                    120 phút
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#showtimes"
              className="gap-6 transition-all ease-in-out duration-500"
            >
              <button className="btn-main mt-5 !px-16">Mua vé</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadView;
