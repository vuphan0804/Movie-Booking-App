import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import MovieFilter from "./MovieFilter";
import MovieCard from "./MovieCard";
import "./index.css";

const MovieShowing = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  return (
    <div id="movieShowing" className="mx-auto max-w-[1000px]">
      <MovieFilter movies={movies} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-center mt-8">
        {movies?.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieShowing;
