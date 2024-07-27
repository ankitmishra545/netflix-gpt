export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg";

export const USER_ICON =
  "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_POSTER_API = "https://image.tmdb.org/t/p/w200/";

export const TMDB_MOVIE_API = "https://api.themoviedb.org/3/movie/";

export const SEARCH_MOVIE_API = "https://api.themoviedb.org/3/search/movie?query=";

export const SEARCH_MOVIE_API_FILTER = "&include_adult=false&language=en-US&page=1";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

// export const MOVIE_REVIEW_API = "{movie_id}/";
// export const MOVIE_DETAILS_API = "{movie_id}";
// export const MOVIE_CREDITS_API = "{movie_id}/""";
// export const MOVIE_IMAGES_API = "{movie_id}/images";
// export const MOVIE_RECOMMENDATIONS_API = "{movie_id}/";
// export const MOVIE_SIMILAR_API = "{movie_id}/";
// export const MOVIE_VIDEOS_API = "{movie_id}/";
// export const MOVIE_RELEASE_DATES_API = "{movie_id}/";

export const MOVIE_DETAILS_API_ARRAY = ["reviews", "", "credits", "recommendations", "similar", "videos"];

export const PROFILE_LOGO = "https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg";

export const TAB_BUTTONS = ["Cast", "Crew", "Production", "Countries", "Reviews", "Similar", "Recommendations"];
