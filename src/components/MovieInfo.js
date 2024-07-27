import { useParams } from "react-router-dom";
import { API_OPTIONS, MOVIE_DETAILS_API_ARRAY, TAB_BUTTONS, TMDB_MOVIE_API } from "../utils/constants";
import { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import ReviewCard from "./ReviewCard";
import Youtube from "./Youtube";
import TabComponent from "./TabComponent";

const MovieInfo = () => {
  const { movieID } = useParams();
  const [allInfo, setAllInfo] = useState(null);
  const [tabName, setTabName] = useState("Cast");

  const getMovieSpecificDetails = async (infoName) => {
    let jsonData;
    if (infoName === "") {
      jsonData = await fetch(TMDB_MOVIE_API + movieID, API_OPTIONS);
    } else {
      jsonData = await fetch(TMDB_MOVIE_API + movieID + "/" + infoName, API_OPTIONS);
    }
    let objName;

    const JSOData = await jsonData.json();
    let data;
    objName = infoName;
    if (infoName === "credits") {
      data = { cast: JSOData.cast, crew: JSOData.crew };
    } else if (infoName === "") {
      objName = "details";
      data = JSOData;
    } else {
      data = JSOData.results;
    }
    setAllInfo((prev) => {
      return { ...prev, [objName]: data };
    });
  };

  useEffect(() => {
    MOVIE_DETAILS_API_ARRAY.map((infoName) => getMovieSpecificDetails(infoName));
  }, [movieID]);

  if (
    !allInfo ||
    !(
      allInfo.details &&
      allInfo.videos &&
      allInfo.reviews &&
      allInfo.similar &&
      allInfo.recommendations &&
      allInfo.credits
    )
  ) {
    return;
  }

  const {
    title,
    budget,
    genres,
    vote_count,
    vote_average,
    status,
    revenue,
    release_date,
    production_companies,
    poster_path,
    overview,
    spoken_languages,
    origin_country,
  } = allInfo?.details;

  const trailer = allInfo?.videos?.filter((video) => video.type === "Trailer");
  const { name, key } = trailer[0];

  const handleTabClick = (button) => {
    setTabName(button);
  };

  return (
    <div className="px-5 bg-gray-700">
      <div className="flex bg-[#DC880A] py-10 px-20">
        <Youtube name={name} videoKey={key} style={"w-[250px] h-[400px]"} />
        <div className="text-white py-5 pl-8 flex flex-col justify-between">
          <h1 className="text-4xl font-bold">
            {title}
            <span className="text-gray-200 text-4xl font-semibold"> ({new Date(release_date).getFullYear()})</span>
          </h1>
          <div>
            <span className="text-sm">{release_date}</span>{" "}
            <span className="text-xl font-thin">{genres.map((genre) => genre.name).join(", ")}</span>
            <span>{}</span>
          </div>
          <div>
            <span className="font-bold">User Rating:- </span>
            {vote_average.toFixed(1)} ({vote_count})
          </div>
          <h3 className="font-bold">Overview</h3>
          <p className="text-sm leading-6 line-clamp-5">{overview}</p>
          <p>[{spoken_languages.map((language) => language.name).join(", ")}]</p>
          <p>{origin_country}</p>
          <p>{status}</p>
          <p>
            <span className="font-bold">Budget:- </span>Budget:- ${(budget / 1000000).toFixed(0)}M
          </p>
          <p>
            <span className="font-bold">Revenue:- </span>Revenue:- ${(revenue / 1000000).toFixed(0)}M
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white py-5">
          <h2 className="pl-3 text-3xl text-red-900 font-bold">Videos</h2>
          <div className="flex px-3 overflow-x-scroll no-scrollbar mt-3">
            {allInfo?.videos.slice(0, 10).map((video) => (
              <Youtube key={video.id} videoKey={video.key} name={video.name} isAuto={0} />
            ))}
          </div>
        </div>
        <div className="flex justify-between bg-gray-400 p-2 pb-0">
          {TAB_BUTTONS.map((button) => (
            <button
              key={button}
              className={"hover:opacity-70 p-1 px-5 text-white font-semibold text-xl"}
              onClick={() => handleTabClick(button)}
              style={button === tabName ? { backgroundColor: "green" } : { color: "" }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="flex p-2 flex-wrap justify-center pb-11 bg-green-700">
        <TabComponent data={allInfo} tabName={tabName} productionCompanies={production_companies} />
      </div>
    </div>
  );
};

export default MovieInfo;
