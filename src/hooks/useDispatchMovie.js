import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";

const useDispatchMovie = (api, reducerMethod, isAvailable) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const moviesData = await fetch(TMDB_MOVIE_API + api, API_OPTIONS);
    const json = await moviesData.json();

    dispatch(reducerMethod(json.results));
  };

  useEffect(() => {
    if (!isAvailable) {
      // when component changing from gptSearch to Home then everytime n/w calls, hence we used memoise concept like this
      getMovies();
    }
  }, []);
};

export default useDispatchMovie;
