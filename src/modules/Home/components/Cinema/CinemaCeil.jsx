import React from "react";
import { Tabs } from "antd";
import CinemaDetails from "./CinemaDetails";

const { TabPane } = Tabs;

const CinemaCeil = ({ cinema, mode }) => {
  return (
    <Tabs tabPosition={mode}>
      {cinema.lstCumRap?.slice(0, 6).map((cinemaCeil, index) => {
        return (
          <TabPane
            tab={
              <div className="w-80 flex border-b border-borderColor">
                <div className="text-left text-white">
                  <p className="text-lg">{cinemaCeil.tenCumRap}</p>
                  <p className="!truncate">{cinemaCeil.diaChi}</p>
                  <p className="text-red-200">Chi tiết</p>
                </div>
              </div>
            }
            key={index}
          >
            <CinemaDetails cinemaCeil={cinemaCeil} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default CinemaCeil;
