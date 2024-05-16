import { useEffect, useState } from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { endpoints } from "../data/endpoints";
import { api_key } from "../data/apikey";
import MovieList from "./MovieList";
import Popular from "./Popular";
/*https://api.themoviedb.org/3/search/movie?query=hostel&page=1&api_key=732dfe94c237f44327af913ebba97825
 */
const url = "https://api.themoviedb.org/3/search/movie";
const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
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
    <>
      <nav className="bg-gray-800 px-4 py-3 flex justify-between">
        <div className="flex items-center text-xl">
          <FaBars
            className="text-white me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <h1
            className="text-2x cursor-pointer  text-red-500 text-xl font-bold capitalize"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            {sidebarToggle ? "Open Sidebar" : "Close Sidebar"}
          </h1>
        </div>
        {/* <div className="flex items-center gap-x-5">
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
        </div> */}
      </nav>
      {searchTerm && (
        <div className="ml-10 py-10">
          <MovieList movies={movies} searchTerm={searchTerm} />
        </div>
      )}
    </>
  );
};

export default Navbar;
