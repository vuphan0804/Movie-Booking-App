import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="card mx-auto relative hover:scale-105 transition-all ease-in-out duration-300 w-60 desktop:w-full laptop:w-full tablet:w-60"
      key={movie.maPhim}
      onClick={() => goToMovie(movie.maPhim)}
    >
      <img
        className="w-full object-cover desktop:h-60 laptop:h-60"
        src={movie.hinhAnh}
        alt={movie.tenPhim}
      />
      <div className="bg-sky-400 px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-1 flex items-center gap-1 text-white text-xs">
        {movie.danhGia}{" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
        </svg>
      </div>
      <div>
        <h6 className="text-white text-lg truncate my-4">
          <span className="bg-orange-600 p-1 text-white right-0 text-lg rounded-lg">
            C16
          </span>{" "}
          {movie.tenPhim}
        </h6>
      </div>
    </div>
  );
};

export default MovieCard;
