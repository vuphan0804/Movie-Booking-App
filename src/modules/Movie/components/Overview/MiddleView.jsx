import React from "react";
import ReactPlayer from "react-player";
import TabsRender from "./TabsRender";

const MiddleView = ({ movie }) => {
  return (
    <div className="flex relative flex-col desktop:mt-2 laptop:mt-2 tablet:mt-20 sm:mt-44 mt-48 md:flex-row mx-auto max-w-[1000px]">
      <div className="shrink-0 md:max-w-[150px] px-6 w-full flex items-center md:flex-col flex-row gap-20 md:border-r border-dark-lighten mt-20">
        <div className="flex flex-col gap-6 items-center mt-2">
          <p className="text-white font-medium text-lg">RATING</p>
          <div className="w-16 border-4 bg-primary border-sky-500 rounded-[50%] p-3 text-center font-bold text-3xl">
            {movie.danhGia}
          </div>
          <div className="flex items-start text-sky-500">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-white font-medium text-lg">EP LENGTH</p>
          <div className="flex gap-2 items-center">
            <p className="text-2xl">22</p>
            <span>min</span>
          </div>
        </div>
      </div>
      <div className="flex-grow min-h-[300px] md:border-r border-dark-lighten md:px-6 px-5 md:py-7">
        <div className="flex gap-10 text-gray-400 text-lg justify-center">
          <TabsRender movie={movie} />
        </div>
      </div>
      <div className="shrink-0 md:max-w-[300px] w-full px-6 pt-6">
        <p className="text-white font-medium text-lg mb-5">TRAILER</p>
        <ReactPlayer
          className="!w-80 !h-72"
          url={movie.trailer}
          controls={true}
        />
      </div>
    </div>
  );
};

export default MiddleView;
