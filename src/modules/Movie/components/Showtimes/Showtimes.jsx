import React, { useState } from "react";
import { Tabs } from "antd";
import useRequest from "hooks/useRequest";
import cinemaAPI from "apis/cinemaAPI";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

const { TabPane } = Tabs;

const Showtimes = ({ movieId }) => {
  const {
    data: cinemas,
    isLoading,
    error,
  } = useRequest(() => cinemaAPI.getShowtimesMovie(movieId));
  const [mode, setMode] = useState("left");

  return (
    <div
      id="showtimes"
      className="max-w-[1000px] bg-primary mx-auto mt-32 border-2 rounded-md border-borderColor lg:block hidden h-auto"
    >
      <Tabs tabPosition={mode}>
        {cinemas?.heThongRapChieu?.map((cinemaSystem, index) => {
          return (
            <TabPane
              tab={
                <img
                  src={cinemaSystem.logo}
                  alt=""
                  className="rounded-full w-12"
                />
              }
              key={index}
            >
              {cinemaSystem.cumRapChieu?.map((cinemaCeil, index) => {
                return (
                  <div className="mt-5 border-b border-borderColor" key={index}>
                    <div className="flex flex-row">
                      <img
                        className="w-16 h-20 rounded-md"
                        src={cinemaCeil.hinhAnh}
                        alt=""
                      />
                      <div className="ml-2 text-white">
                        <p className="text-lg font-bold">
                          {cinemaCeil.tenCumRap}
                        </p>
                        <p className="text-sm">{cinemaCeil.diaChi}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 my-3">
                      {cinemaCeil.lichChieuPhim
                        ?.slice(0, 8)
                        .map((showtimes, index) => {
                          return (
                            <NavLink
                              className="text-base text-white border border-borderColor p-1 rounded-full pl-5"
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
                );
              })}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Showtimes;
