import React, { useState } from "react";
import { Tabs } from "antd";
import useRequest from "hooks/useRequest";
import cinemaAPI from "apis/cinemaAPI";
import CinemaCeil from "./CinemaCeil";

const { TabPane } = Tabs;

const Cinema = () => {
  const {
    data: cinemas,
    isLoading,
    error,
  } = useRequest(() => cinemaAPI.getShowtimesCinema());
  const [mode, setMode] = useState("left");

  // const handleModeChange = (e) => {
  //   setMode(e.target.value);
  // };

  return (
    <div
      id="cinema"
      className="max-w-[1000px] mx-auto mt-32 bg-primary border-2 border-borderColor lg:block hidden max-h-[1200px] rounded-md"
    >
      <Tabs tabPosition={mode}>
        {cinemas?.map((cinema, index) => {
          return (
            <TabPane
              tab={<img src={cinema.logo} className="rounded-full w-12" />}
              key={index}
            >
              <CinemaCeil cinema={cinema} mode={mode} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Cinema;
