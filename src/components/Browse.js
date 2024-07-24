import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
