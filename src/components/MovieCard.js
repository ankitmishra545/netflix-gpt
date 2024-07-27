import { useNavigate } from "react-router-dom";
import { MOVIE_POSTER_API } from "../utils/constants";

const MovieCard = ({ posterId, movieId }) => {
  const navigate = useNavigate();

  const handleMovieCardClick = () => {
    console.log(movieId);
    navigate("/movieInfo/" + movieId);
  };
  return (
    <div className="px-1 w-[150px] cursor-pointer hover:w-[160px] " onClick={handleMovieCardClick}>
      <img src={MOVIE_POSTER_API + posterId} alt="poter image" />
    </div>
  );
};

export default MovieCard;
