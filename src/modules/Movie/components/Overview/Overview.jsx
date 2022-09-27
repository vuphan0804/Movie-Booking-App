import React from "react";
import HeadView from "./HeadView";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import MiddleView from "./MiddleView";

const Overview = ({ movieId }) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!movie) {
    return null;
  }
  return (
    <div className="w-full">
      <HeadView movie={movie} />
      <MiddleView movie={movie} />
    </div>
  );
};

export default Overview;
