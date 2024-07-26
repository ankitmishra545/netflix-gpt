import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const suggestedMovies = useSelector((store) => store.gpt.gptMovies);
  return (
    <div className="text-white bg-black bg-opacity-75">
      {suggestedMovies?.map((movies) => {
        return <MovieList key={movies[0]?.original_title} title={movies[0]?.original_title} movies={movies} />;
      })}
    </div>
  );
};

export default GptSearchSuggestion;
