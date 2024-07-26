import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useDispatchMovie from "../hooks/useDispatchMovie";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { useSelector } from "react-redux";
import GptSearchComponent from "./GptSearchComponent";

const Browse = () => {
  useDispatchMovie("now_playing", addNowPlayingMovies); // As browse is present while in account page so no network call created again

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GptSearchComponent />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
