import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SingleMovie = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits&api_key=5a350955b88b65ec1e5cddb240f64945`;
  const profileUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState(id);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search"));

  const [loading, setLoading] = useState(false);

  // const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setMovie(json);
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div>
          <div className="flex items-center text-surface dark:text-white">
            <strong>Loading...</strong>
            <div
              className="ms-auto mr-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="item">
          <img
            className="rounded-2xl"
            src={
              movie?.poster_path !== null
                ? `${profileUrl}/${movie?.poster_path}`
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div className="item">
          <h1 className="mb-4">
            {movie?.title} ({new Date(movie?.release_date).getFullYear()}){" "}
          </h1>
          <h2 className="movie-title mb-2">{movie?.tagline}</h2>

          <h3>
            <span className="flex gap-2 float-left">
              <FaStar /> {movie?.vote_average} / 10
            </span>
            <span className="float-right">
              <span className="uppercase">{movie?.original_language}</span> /{" "}
              {movie?.origin_country}
            </span>
          </h3>
          <h3 className="text-center mb-4">{movie?.release_date} </h3>
          <article className="mb-4">
            <h2 className="flex align-items:left justify-left">Overview</h2>
            <p style={{ textAlign: "left" }}>{movie?.overview}</p>
          </article>
          <article>
            <h2 className="grid grid-co align-items:left justify-left">
              Top Cast
            </h2>
            <p className="flex align-items:left justify-left">
              <ul className="flex gap-10">
                {movie?.credits?.cast?.slice(0, 5).map((actor) => {
                  return (
                    <li key={actor.id}>
                      <img
                        className="rounded-xl"
                        src={
                          actor.profile_path !== null
                            ? `${profileUrl}/${actor.profile_path}`
                            : "https://via.placeholder.com/400"
                        }
                        alt={actor.name}
                      />
                      <h3>{actor.name}</h3> <p>{actor.character}</p>
                    </li>
                  );
                })}
              </ul>
            </p>
          </article>
        </div>
      </div>
      {/* <div className="flex mr-24 ml-12">
        <div className="movie-poster">
          <img
            className="rounded-2xl"
            src={
              movie?.poster_path !== null
                ? `${profileUrl}/${movie?.poster_path}`
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div className="movie-title">
          <h1>
            {movie?.title} ({new Date(movie?.release_date).getFullYear()}){" "}
          </h1>
          <h2>{movie?.tagline}</h2>
          <h3>
            <FaStar />
            <span className="mr-2 ml-2"> {movie?.vote_average} / 10</span>
            <span className="ml-10">
              {movie?.runtime !== 0 ? movie?.runtime : 90}min{" "}
            </span>
            <span className="ml-10">
              {movie?.release_date} /{" "}
              <span className="uppercase">{movie?.original_language}</span> /{" "}
              {movie?.origin_country}
            </span>
          </h3>
          <ul className="flex items-center justify-center gap-10">
            {movie &&
              movie?.genres?.map((genre) => {
                return (
                  <li key={genre.id}>
                    <a href="#"></a>
                  </li>
                );
              })}
          </ul>
          <br />
          <article className="mb-10 ml-10">
            <h2 className="flex align-items:left justify-left">Overview</h2>
            <p style={{ textAlign: "left" }}>{movie?.overview}</p>
          </article>
          <article className="mb-10 ml-10">
            <h2 className="grid grid-co align-items:left justify-left">
              Top Cast
            </h2>
            <p className="flex align-items:left justify-left">
              <ul className="flex gap-10">
                {movie?.credits?.cast?.slice(0, 5).map((actor) => {
                  return (
                    <li key={actor.id}>
                      <img
                        className="rounded-xl"
                        src={
                          actor.profile_path !== null
                            ? `${profileUrl}/${actor.profile_path}`
                            : "https://via.placeholder.com/400"
                        }
                        alt={actor.name}
                      />
                      <h3>{actor.name}</h3> <p>{actor.character}</p>
                    </li>
                  );
                })}
              </ul>
            </p>
          </article>
        </div>
      </div> */}
    </>
  );
};

export default SingleMovie;
{
  /* ; */
}
