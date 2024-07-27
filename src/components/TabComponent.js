import Card from "./Card";
import ReviewCard from "./ReviewCard";

const TabComponent = ({ data, tabName, productionCompanies }) => {
  switch (tabName) {
    case "Cast":
      return data?.credits?.cast.map((cast) => (
        <Card
          key={cast.id}
          poster={cast.profile_path}
          name={cast.name}
          content={cast.known_for_department}
          character={cast.character}
        />
      ));
      break;
    case "Crew":
      return data?.credits?.crew.map((crew, index) => (
        <Card
          key={crew.id + crew.name + index}
          poster={crew.profile_path}
          name={crew.name}
          content={crew.known_for_department}
          character={crew.character}
        />
      ));
    case "Production":
      return productionCompanies.map((company) => (
        <Card key={company.id} name={company.name} poster={company.logo_path} content={company.origin_country} />
      ));

    case "Countries":
    case "Reviews":
      return (
        <div className="flex flex-col items-center">
          {data?.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              authorDetails={review.author_details}
              content={review.content}
              createTime={review.created_at}
              updateTime={review.updated_at}
            />
          ))}
        </div>
      );
    case "Similar":
      return data?.similar.map((movie) => (
        <Card
          key={movie.id}
          name={movie.title}
          poster={movie.poster_path}
          content={movie.vote_average.toFixed(1) + " (" + movie.vote_count + ")"}
          movieId={movie.id}
        />
      ));
    case "Recommendations":
      return data?.recommendations.map((recommendation) => (
        <Card
          key={recommendation.id}
          name={recommendation.title}
          poster={recommendation.poster_path}
          content={recommendation.vote_average.toFixed(1) + " (" + recommendation.vote_count + ")"}
          movieId={recommendation.id}
        />
      ));
  }
};

export default TabComponent;
