import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const suggestedMovies = useSelector((store) => store.gpt.gptMovies);
  return (
    <div className="text-white bg-black">
      {suggestedMovies?.map((movies, index) => {
        console.log(movies);
        return <MovieList title={movies[0]?.original_title} movies={movies} />;
      })}
    </div>
  );
};

export default GptSearchSuggestion;
