import { Button } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Addmovies from "./Addmovies";
import "./App.css";
import Movielist from "./Movielist";
import Playtrailer from "./Playtrailer";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <span className="title">Movie Time</span>
        <div className="nav_buttons" placeholder="Search">
          <Link className="button" to="/">
            <Button variant="contained">Home</Button>
          </Link>
          <Link className="button" to="/addmovies">
            <Button variant="contained">Add Movie</Button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Movielist />} />
        <Route path="addmovies" element={<Addmovies />} />
        <Route path="trailer/:id" element={<Playtrailer />} />
      </Routes>
    </div>
  );
}

export default App;
