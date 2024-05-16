const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div>
      <img
        className="jss38"
        src={
          posterUrl !== "N/A" ? posterUrl : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
    </div>
  );
};

export default MovieCard;
