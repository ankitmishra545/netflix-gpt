import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useDispatchMovie from "../hooks/useDispatchMovie";
import { addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  useDispatchMovie("upcoming", addUpcomingMovies);
  useDispatchMovie("top_rated", addTopRatedMovies);
  useDispatchMovie("popular", addPopularMovies);
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
