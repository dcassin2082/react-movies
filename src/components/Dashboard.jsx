import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Adventure,
  Animation,
  Comedy,
  Crime,
  Documentary,
  Drama,
  Family,
  Fantasy,
  History,
  Horror,
  Music,
  Mystery,
  Popular,
  Romance,
  ScienceFiction,
  SingleMovie,
  TVMovie,
  Thriller,
  TopRated,
  Upcoming,
  War,
  Western,
} from "../components/index";
import Action from "./Action";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="ml-10 py-10">
        {/* <MovieList /> */}
        <Routes>
          {/* <Route path="/" element={<MovieList category="popular" />} /> */}
          <Route index element={<Navigate to="/popular" replace />} />
          <Route path="/popular" element={<Popular category="popular" />} />
          <Route
            path="/top_rated"
            element={<TopRated category="top rated" />}
          />
          <Route path="/upcoming" element={<Upcoming category="upcoming" />} />
          <Route path="/action" element={<Action category="action" />} />
          <Route
            path="/adventure"
            element={<Adventure category="adventure" />}
          />
          <Route
            path="/animation"
            element={<Animation category="animation" />}
          />
          <Route path="/comedy" element={<Comedy category="comedy" />} />
          <Route path="/crime" element={<Crime category="crime" />} />
          <Route
            path="/documentary"
            element={<Documentary category="documentary" />}
          />
          <Route path="/drama" element={<Drama category="drama" />} />
          <Route path="/family" element={<Family category="family" />} />
          <Route path="/fantasy" element={<Fantasy category="fantasy" />} />
          <Route path="/history" element={<History category="history" />} />
          <Route path="/horror" element={<Horror category="horror" />} />
          <Route path="/music" element={<Music category="music" />} />
          <Route path="/mystery" element={<Mystery category="mystery" />} />
          <Route path="/romance" element={<Romance category="romance" />} />
          <Route
            path="/science_fiction"
            element={<ScienceFiction category="science fiction" />}
          />
          <Route path="/thriller" element={<Thriller category="thriller" />} />
          <Route path="/tv_movie" element={<TVMovie category="TV movie" />} />
          <Route path="/war" element={<War category="war" />} />
          <Route path="/western" element={<Western category="western" />} />
          <Route path="/movie/:id" element={<SingleMovie category="" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
