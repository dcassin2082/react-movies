import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { endpoints } from "../data/endpoints";

const MovieList = ({ movies, searchTerm }) => {
  return (
    <main className="items-center justify-center">
      <h1 className="main-title">Search: {searchTerm}</h1>
      {/* <div
        className="items-center justify-center container mb-10 rounded-sm"
        style={{
          height: "20vw",
          width: "70vw",
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg)",
        }}
      >
        <div className="bottom-left ">
          <h1 className="text-white">movie title</h1>
        </div>
      </div> */}
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
  );
};

export default MovieList;
