import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useDispatchMovie from "../hooks/useDispatchMovie";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  useDispatchMovie("now_playing", addNowPlayingMovies);
  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
