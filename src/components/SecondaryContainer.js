import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="w-full bg-black text-white">
      <div className="-mt-60 relative z-20">
        <MovieList key="nowplayingmovies" title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList key="popularmovies" title="Popular Movies" movies={movies.popularMovies} />
        <MovieList key="topratedmovies" title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList key="upcomingmovies" title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
