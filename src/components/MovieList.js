import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-5">
      <h1 className="text-xl font-bold py-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex items-center">
          {movies?.map((movie) => {
            return (
              <div className="w-[160px] h-[250px]">
                <MovieCard key={movie.id} posterId={movie.poster_path} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
