import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import randomNumberGenerator from "../utils/randomNumberGenerator";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return; //early returning
  const index = randomNumberGenerator(movies.length);
  const { id, title, overview } = movies[index];

  return (
    <div>
      <VideoInfo title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default PrimaryContainer;
