import StarRatings from "react-star-ratings";

function StarRating({ rating }) {
  return (
    <StarRatings
      starDimension="16px"
      rating={rating}
      starRatedColor="black"
      numberOfStars={10}
    />
  );
}

export default StarRating;
