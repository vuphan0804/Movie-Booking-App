import React from "react";
import { useParams } from "react-router-dom";

import Overview from "../components/Overview";
import Showtimes from "../components/Showtimes";

const Movie = () => {
  // useParams là hook để lấy giá trị params trên url
  const { movieId, checkoutId } = useParams();

  return (
    <div>
      <Overview movieId={movieId} checkoutId={checkoutId} />
      <Showtimes movieId={movieId} checkoutId={checkoutId} />
    </div>
  );
};

export default Movie;
