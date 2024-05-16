import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      {/* <Routes>
        <Route path="/:genre" element={<MovieList />} />
      </Routes> */}
    </div>
  );
};

export default App;
