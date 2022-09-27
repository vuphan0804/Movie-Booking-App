import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  movieNowShowing,
  movieComingSoon,
} from "../../slices/movieShowingSlice";

const MovieFilter = ({ movies }) => {
  const { nowShowing, comingSoon } = useSelector((state) => state.movieShowing);
  const dispatch = useDispatch();

  let classActiveNowShowing = nowShowing === true ? "btn-active" : "";
  let classActiveComingSoon = comingSoon === true ? "btn-active" : "";
  return (
    <div className="flex justify-between">
      <div className="">
        <p className="font-bold text-3xl">MOVIES</p>
        <p className="text-xl">Be sure not to miss these Movies today.</p>
      </div>
      <div className="">
        <button
          className={`btn-none-active m-2 ${classActiveNowShowing}`}
          onClick={() => {
            dispatch(movieNowShowing());
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className={`btn-none-active m-2 ${classActiveComingSoon} `}
          onClick={() => {
            dispatch(movieComingSoon());
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>
    </div>
  );
};

export default MovieFilter;
