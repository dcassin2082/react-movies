import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFilm,
  BsStar,
  BsEmojiLaughing,
} from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { MdAnimation } from "react-icons/md";
import { TbHourglass } from "react-icons/tb";
import {
  PiFilmSlateLight,
  PiSmileySadBold,
  PiSmileySadLight,
  PiFlyingSaucerLight,
  PiTelevisionSimple,
  PiSkullLight,
  PiCactus,
  PiSpeedometerLight,
} from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import {
  GiBloodyStash,
  GiCrimeSceneTape,
  GiIronHulledWarship,
} from "react-icons/gi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { GiSpy } from "react-icons/gi";
import { TbHearts } from "react-icons/tb";
import { MdOutlineMovie } from "react-icons/md";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { endpoints } from "../data/endpoints";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { PiTelevisionSimpleLight } from "react-icons/pi";

const Sidebar = ({ sidebarToggle }) => {
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
    <>
      <div
        className={`${
          sidebarToggle ? " hidden" : " block"
        } w-64 bg-gray-800 fixed h-full overflow-y-auto px-4 py-2`}
      >
        <h3 className="text-white pt-4">Categories</h3>
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <BsFilm className="inline-block w-6 h-6 mr-2 -mt-2" />
              Popular
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/top_rated"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <BsStar className="inline-block w-6 h-6 mr-2 -mt-2" />
              Top Rated
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <BiMovie className="inline-block w-6 h-6 mr-2 -mt-2" />
              Upcoming
            </NavLink>
          </li>
        </ul>
        <hr />
        <h3 className="text-white pt-4">Genre</h3>
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              activeStyle={{ color: "#eca511" }}
              to="/action"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiFilmSlateLight className="inline-block w-6 h-6 mr-2 -mt-2" />
              Action
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/adventure"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiSpeedometerLight className="inline-block w-6 h-6 mr-2 -mt-2" />
              Adventure
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/animation"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <MdAnimation className="inline-block w-6 h-6 mr-2 -mt-2" />
              Animation
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/comedy"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <BsEmojiLaughing className="inline-block w-6 h-6 mr-2 -mt-2" />
              Comedy
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/crime"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <GiCrimeSceneTape className="inline-block w-6 h-6 mr-2 -mt-2" />
              Crime
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/documentary"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <BsFillGearFill className="inline-block w-6 h-6 mr-2 -mt-2" />
              Documentary
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/drama"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiSmileySadBold className="inline-block w-6 h-6 mr-2 -mt-2" />
              Drama
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/family"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <MdFamilyRestroom className="inline-block w-6 h-6 mr-2 -mt-2" />
              Family
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/fantasy"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <FaFantasyFlightGames className="inline-block w-6 h-6 mr-2 -mt-2" />
              Fantasy
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <TbHourglass className="inline-block w-6 h-6 mr-2 -mt-2" />
              History
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/horror"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <GiBloodyStash className="inline-block w-6 h-6 mr-2 -mt-2" />
              Horror
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/music"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <GiSpy className="inline-block w-6 h-6 mr-2 -mt-2" />
              Music
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/mystery"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <TbHourglass className="inline-block w-6 h-6 mr-2 -mt-2" />
              Mystery
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/romance"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <TbHearts className="inline-block w-6 h-6 mr-2 -mt-2" />
              Romance
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/science_fiction"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiFlyingSaucerLight className="inline-block w-6 h-6 mr-2 -mt-2" />
              Science Fiction
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/thriller"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <TbHourglass className="inline-block w-6 h-6 mr-2 -mt-2" />
              Thriller
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/tv_movie"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiTelevisionSimpleLight className="inline-block w-6 h-6 mr-2 -mt-2" />
              TV Movie
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/war"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <GiIronHulledWarship className="inline-block w-6 h-6 mr-2 -mt-2" />
              War
            </NavLink>
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink
              to="/western"
              className={({ isActive }) =>
                isActive ? "text-red-500 px-3" : "px-3"
              }
            >
              <PiCactus className="inline-block w-6 h-6 mr-2 -mt-2" />
              Western
            </NavLink>
          </li>
        </ul>
      </div>
      <main className="items-center justify-center">
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
        {/* <div>
          {movies.map((movie) => {
            return (
              <Link key={movie.id} to={`movie/${movie.id}`}>
                <MovieCard movie={movie} id={movie.id} />
                <h5 className="text-lg wrapper text-white text-center text-ellipsis overflow-hidden">
                  {movie.title}
                </h5>
              </Link>
            );
          })}
        </div> */}
      </main>
    </>
  );
};

export default Sidebar;
