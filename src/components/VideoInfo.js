import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoInfo = ({ title, overview }) => {
  return (
    <div className="aspect-video bg-gradient-to-r from-black absolute w-screen pt-[20%] pl-24 text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg w-1/4 px-1 py-4">{overview}</p>
      <div className="flex text-xl">
        <button className="bg-white text-black p-2 px-4 rounded-lg flex items-center hover:bg-opacity-70">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-600 text-white bg-opacity-90 p-2 px-4 rounded-lg  flex items-center ml-4  hover:bg-opacity-70">
          <MdInfoOutline />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
