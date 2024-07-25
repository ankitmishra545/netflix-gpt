import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useDispatchMovie = (api, reducerMethod) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const moviesData = await fetch(TMDB_MOVIE_API + api, API_OPTIONS);
    const json = await moviesData.json();

    dispatch(reducerMethod(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useDispatchMovie;
