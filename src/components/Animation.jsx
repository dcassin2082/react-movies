import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { endpoints } from "../data/endpoints";
import { api_key } from "../data/apikey";

const moviesEndpoint = endpoints.find(
  (endpoint) => endpoint.name === "animation"
).url;
const searchEndpoint = "https://api.themoviedb.org/3/search/movie";

const Animation = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = async (searchTerm) => {
    setLoading(true);
    const url = !searchTerm
      ? moviesEndpoint
      : `${searchEndpoint}?query=${searchTerm}&page=1&api_key=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  };
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

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
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="icon w-2/3 md:w-1/2 lg:w-1/3 text-slate-100 py-2 mb-6 mr-12 rounded-xl shadow outline-none md:block"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchMovies(searchTerm);
          }}
        />
      </div>
      <main className="items-center justify-center">
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center mr-12">
          {movies.map((movie) => {
            return (
              <>
                <div>
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard movie={movie} id={movie.id} />
                    <h5 className="text-lg wrapper text-white text-center text-ellipsis overflow-hidden">
                      {movie.title}
                    </h5>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Animation;
