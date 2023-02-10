import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Addmovies from "./Addmovies";
import "./App.css";
import Movielist from "./Movielist";
import Playtrailer from "./Playtrailer";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div
      className="App"
      style={
        theme != true
          ? { backgroundColor: "white", color: "#3B71CA" }
          : { backgroundColor: "#332D2D" }
      }
    >
      <div
        className="Nav"
        style={
          theme != true
            ? { backgroundColor: "#f5f5f5", color: "#3B71CA" }
            : { backgroundColor: "#212121" }
        }
      >
        <span className="title">Movie Time</span>
        <div className="nav_buttons" placeholder="Search">
          <Link className="button" to="/">
            <Button
              variant="contained"
              style={
                theme != true
                  ? { backgroundColor: "white", color: "#3B71CA" }
                  : { backgroundColor: "white", color: "#332D2D" }
              }
            >
              Home
            </Button>
          </Link>
          <Link className="button" to="/addmovies">
            <Button
              variant="contained"
              style={
                theme != true
                  ? { backgroundColor: "white", color: "#3B71CA" }
                  : { backgroundColor: "white", color: "#332D2D" }
              }
            >
              Add Movie
            </Button>
          </Link>
          <Button variant="contained" onClick={() => setTheme(true)}>
            Dark
          </Button>
          <Button variant="contained" onClick={() => setTheme(false)}>
            Light
          </Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Movielist theme={theme} />} />
        <Route path="addmovies" element={<Addmovies />} />
        <Route path="trailer/:id" element={<Playtrailer />} />
      </Routes>
    </div>
  );
}

export default App;
