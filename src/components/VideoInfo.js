import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import lang from "../utils/lunguageConstants";

const VideoInfo = ({ title, overview }) => {
  const languageKey = useSelector((store) => store.config.language);
  return (
    <div className="aspect-video bg-gradient-to-r from-black absolute w-screen pt-[20%] pl-24 text-white">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-sm w-1/4 px-1 py-4">{overview}</p>
      <div className="flex text-xl">
        <button className="bg-white text-black p-2 px-4 rounded-lg flex items-center hover:bg-opacity-70">
          <FaPlay />
          {lang[languageKey].play}
        </button>
        <button className="bg-gray-600 text-white bg-opacity-90 p-2 px-4 rounded-lg  flex items-center ml-4  hover:bg-opacity-70">
          <MdInfoOutline />
          {lang[languageKey].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
