import { Box, Button, Paper, Switch } from "@mui/material";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Addmovies from "./Addmovies";
import "./App.css";
import Editmovies from "./Editmovies";
import Movielist from "./Movielist";
import Playtrailer from "./Playtrailer";


function App() {
  const [theme, setTheme] = useState(false);
  const handleChange = (event)=>{
    setTheme(event.target.checked)
  }
  return (
    <div
      className="App"
      
    >
      <div
        className="Nav"
        style={
          theme != true
            ? { backgroundColor: "#f5f5f5",  }
            : { backgroundColor: "#212121", color: "white"}
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
          <Switch
              checked={theme}
              onChange={handleChange}
              aria-label="login switch"
            />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Movielist theme={theme} />} />
        <Route path="addmovies" element={<Addmovies />} />
        <Route path="trailer/:id" element={<Playtrailer />} />
        <Route path="editMovies/:id" element={<Editmovies/>}/>
      </Routes>
    </div>
  );
}

export default App;
