import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_API } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const fetchMovieVideos = await fetch(TMDB_MOVIE_API + movieId + "/videos", API_OPTIONS);
    const json = await fetchMovieVideos.json();

    const filteredData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
