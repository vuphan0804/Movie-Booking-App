import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

const CinemaDetails = ({ cinemaCeil }) => {
  return (
    <div>
      {cinemaCeil.danhSachPhim.slice(0, 4).map((movie, index) => {
        return (
          <Fragment key={index}>
            <div className="my-5">
              <div className="flex">
                <img
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                  className="!w-24 !h-32 rounded-md object-cover"
                />
                <div className="ml-2">
                  <h1 className="text-xl text-white mb-2">{movie.tenPhim}</h1>
                  <div className="grid grid-cols-2 gap-2">
                    {movie.lstLichChieuTheoPhim
                      ?.slice(0, 4)
                      .map((showtimes, index) => {
                        return (
                          <NavLink
                            className="text-base text-white border border-borderColor p-1 rounded-full"
                            to={`/checkout/${showtimes.maLichChieu}`}
                            key={index}
                          >
                            {dayjs(showtimes.ngayChieuGioChieu).format(
                              "DD.MM.YYYY ~ hh:mm A"
                            )}
                          </NavLink>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CinemaDetails;
