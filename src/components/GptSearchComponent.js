import { BACKGROUND_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearchComponent = () => {
  return (
    <div>
      <img src={BACKGROUND_URL} className="fixed -z-10" />

      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearchComponent;
