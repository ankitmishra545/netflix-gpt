import { MOVIE_POSTER_API, PROFILE_LOGO } from "../utils/constants";

const ReviewCard = ({ authorDetails, content, createTime, updateTime }) => {
  const { avatar_path, rating = "No rating", username } = authorDetails;

  return (
    <div className="w-9/12 mt-10 bg-gray-200 p-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={avatar_path ? MOVIE_POSTER_API + avatar_path : PROFILE_LOGO}
          />
          <span className="font-bold pl-2">@{username}</span>
        </div>
        <div>
          <span className="font-bold text-sm">Rating:- </span>
          <span className="text-xs  font-semibold">{rating ? rating + "/10" : "Not Rated"}</span>
        </div>
      </div>
      <p className="px-5 mt-3 text-sm">{content}</p>
      <div className="flex justify-between px-5 mt-5">
        <span className="font-serif">
          <span className="font-mono">Created At:-</span> {createTime}
        </span>
        <span className="font-serif">
          <span className="font-mono">Updated At:- </span>
          {updateTime}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
