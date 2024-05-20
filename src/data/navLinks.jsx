import { BsFillGearFill, BsStar, BsEmojiLaughing } from "react-icons/bs";

import { BiMovie } from "react-icons/bi";
import { MdAnimation, MdFamilyRestroom } from "react-icons/md";
import { TbHourglass, TbHearts } from "react-icons/tb";
import {
  PiFilmSlateLight,
  PiSmileySadBold,
  PiFlyingSaucerLight,
  PiCactus,
  PiSpeedometerLight,
  PiTelevisionSimpleLight,
} from "react-icons/pi";
import {
  GiBloodyStash,
  GiCrimeSceneTape,
  GiIronHulledWarship,
  GiSpy,
} from "react-icons/gi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { FaFantasyFlightGames, FaFilm } from "react-icons/fa6";

export const navLinkCategories = [
  {
    id: 1,
    to: "/popular",
    text: "popular",
    icon: <FaFilm className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 2,
    to: "/top_rated",
    text: "top rated",
    icon: <BsStar className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 3,
    to: "/upcoming",
    text: "upcoming",
    icon: <BiMovie className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];

export const navLinkGenres = [
  {
    id: 1,
    to: "/action",
    text: "action",
    icon: <PiFilmSlateLight className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 2,
    to: "/adventure",
    text: "adventure",
    icon: <PiSpeedometerLight className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 3,
    to: "/animation",
    text: "animation",
    icon: <MdAnimation className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 4,
    to: "/comedy",
    text: "comedy",
    icon: <BsEmojiLaughing className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 5,
    to: "/crime",
    text: "crime",
    icon: <GiCrimeSceneTape className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 6,
    to: "/documentary",
    text: "documentary",
    icon: <BsFillGearFill className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 7,
    to: "/drama",
    text: "drama",
    icon: <PiSmileySadBold className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 8,
    to: "/family",
    text: "family",
    icon: <MdFamilyRestroom className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 9,
    to: "/fantasy",
    text: "fantasy",
    icon: <FaFantasyFlightGames className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 10,
    to: "/history",
    text: "history",
    icon: <TbHourglass className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 11,
    to: "/horror",
    text: "horror",
    icon: <GiBloodyStash className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 12,
    to: "/music",
    text: "music",
    icon: <IoMusicalNoteOutline className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 13,
    to: "/mystery",
    text: "mystery",
    icon: <GiSpy className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 14,
    to: "/romance",
    text: "romance",
    icon: <TbHearts className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 15,
    to: "/science_fiction",
    text: "science_fiction",
    icon: <PiFlyingSaucerLight className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 16,
    to: "/thriller",
    text: "thriller",
    icon: <TbHourglass className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 17,
    to: "/tv_movie",
    text: "TV Movie",
    icon: (
      <PiTelevisionSimpleLight className="inline-block w-6 h-6 mr-2 -mt-2" />
    ),
  },
  {
    id: 18,
    to: "/war",
    text: "war",
    icon: <GiIronHulledWarship className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 19,
    to: "/western",
    text: "western",
    icon: <PiCactus className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];
