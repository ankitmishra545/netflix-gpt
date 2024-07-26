import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearchComponent = () => {
  return (
    <div>
      <img src={LOGIN_PAGE_BACKGROUND} className="absolute -z-10" />

      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearchComponent;
