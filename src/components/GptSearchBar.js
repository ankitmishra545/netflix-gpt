import { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { API_OPTIONS, SEARCH_MOVIE_API, SEARCH_MOVIE_API_FILTER } from "../utils/constants";
import { addGPTMoviesResult } from "../utils/store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchInputRef = useRef(null);

  const searchTMDBMovie = async (movie) => {
    const data = await fetch(SEARCH_MOVIE_API + movie + SEARCH_MOVIE_API_FILTER, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchResult = async () => {
    const gptQuery =
      "Act as a Movie Recommandation system and suggest some movies for the query" +
      gptSearchInputRef.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Dhamaal, Koi Mil Gaya, Don. ";
    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptSearchMovies = gptSearchResult.choices[0]?.message?.content.split(", ");

    const promiseArray = gptSearchMovies.map((movie) => searchTMDBMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGPTMoviesResult(tmdbResults));
  };

  return (
    <div className="pt-[8%]">
      <form className="p-5  flex justify-center " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={gptSearchInputRef}
          type="text"
          className="w-4/12 p-2 rounded-xl "
          placeholder="What do you want to watch today?"
        />
        <button className="text-white bg-red-600 p-2 px-4 rounded-lg mx-3" onClick={handleGptSearchResult}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
