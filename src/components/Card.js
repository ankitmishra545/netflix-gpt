import { useNavigate } from "react-router-dom";
import { MOVIE_POSTER_API } from "../utils/constants";

const Card = ({ name, content, poster, movieId }) => {
  const navigate = useNavigate();
  if (!poster) return;

  const handleMovieClick = () => {
    if (movieId) {
      navigate("/movieInfo/" + movieId);
    } else {
      return;
    }
  };
  return (
    <div
      className="flex p-1 mx-3 w-[150px] bg-white mt-3 shadow-xl rounded-lg"
      onClick={handleMovieClick}
      style={movieId && { cursor: "pointer" }}
    >
      <img className="w-[50px] object-contain" src={MOVIE_POSTER_API + poster} />
      <div className="flex flex-col pl-2">
        <h3 className="text-xs font-bold">{name}</h3>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default Card;
