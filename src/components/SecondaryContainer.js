import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useDispatchMovie from "../hooks/useDispatchMovie";
import { addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/store/movieSlice";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  const upcomingAvailable = movies.upcomingMovies;
  const topRatedAvailable = movies.upcomingMovies;
  const popularAvailable = movies.upcomingMovies;
  useDispatchMovie("upcoming", addUpcomingMovies, upcomingAvailable);
  useDispatchMovie("top_rated", addTopRatedMovies, topRatedAvailable);
  useDispatchMovie("popular", addPopularMovies, popularAvailable);
  return (
    <div className="w-full bg-black text-white">
      <div className="-mt-60 relative z-20">
        <MovieList key="now_playing_movies" title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList key="popular_movies" title="Popular Movies" movies={movies.popularMovies} />
        <MovieList key="top_rated_movies" title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList key="upcoming_movies" title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
