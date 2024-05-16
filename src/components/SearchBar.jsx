import React, { useEffect, useState } from "react";
import { endpoints } from "../data/endpoints";
import { api_key } from "../data/apikey";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(
      `${url}?query=${searchTerm}&page=1&api_key=${api_key}`
    );
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    searchMovies(searchTerm);
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);
  return (
    <div className="flex items-center gap-x-5">
      <div className="relative md:w-65">
        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
          <button className="p-1 focus:outline-none text-white md:text-black">
            <FaSearch />
          </button>
        </span>
        <input
          type="text"
          className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          placeholder="Search Movies"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchMovies(searchTerm);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
