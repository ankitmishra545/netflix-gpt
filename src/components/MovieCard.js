import { MOVIE_POSTER_API } from "../utils/constants";

const MovieCard = ({ posterId }) => {
  return (
    <div className="px-1 w-[150px] cursor-pointer hover:w-[160px] ">
      <img src={MOVIE_POSTER_API + posterId} alt="poter image" />
    </div>
  );
};

export default MovieCard;
