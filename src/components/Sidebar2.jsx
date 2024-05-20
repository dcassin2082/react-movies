import React, { useEffect, useState } from "react";
import { navLinkCategories, navLinkGenres } from "../data/navLinks";
import { NavLink } from "react-router-dom";
import { endpoints } from "../data/endpoints";

const Sidebar2 = ({ sidebarToggle }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search"));
  const [category, setCategory] = useState("popular");
  const [url, setUrl] = useState(
    endpoints.find((endpoint) => endpoint.name === "popular").url
  );

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1&api_key=5a350955b88b65ec1e5cddb240f64945";
  const searchMovies = async (genre) => {
    // const response = await fetch(`${url}&s=${searchTerm}`);
    setUrl(endpoints.find((endpoint) => endpoint.name === `${category}`).url);
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    searchMovies(category);
    localStorage.setItem("search", searchTerm);
  }, [category]);

  return (
    <div
      className={`${
        sidebarToggle ? " hidden" : " block"
      } w-64 bg-gray-800 fixed h-full overflow-y-auto px-4 py-2`}
    >
      <h3 className="text-white pt-4">Categories</h3>
      <ul className="mt-3 text-white font-bold">
        {navLinkCategories.map((link) => {
          const { id, to, text, icon } = link;
          return (
            <li
              className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
              key={id}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-red-500 px-3" : "px-3"
                }
              >
                {icon}
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <h3 className="text-white pt-4">Genre</h3>
      <ul className="mt-3 text-white font-bold">
        {navLinkGenres.map((link) => {
          const { id, to, text, icon } = link;
          return (
            <li
              className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
              key={id}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-red-500 px-3" : "px-3"
                }
              >
                {icon}
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar2;
