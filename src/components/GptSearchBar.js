import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%]">
      <div className="p-5  flex justify-center ">
        <input type="text" className="w-4/12 p-2 rounded-xl " placeholder="What do you want to watch today?" />
        <button className="text-white bg-red-600 p-2 px-4 rounded-lg mx-3">Search</button>
      </div>
    </div>
  );
};

export default GptSearchBar;
