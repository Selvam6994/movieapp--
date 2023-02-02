import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="Nav">
      <span className="title">Movie Time</span>
      <div className="nav_buttons" placeholder="Search">
      <Link to="/"><Button className="button" variant="contained">Home</Button></Link>
      <Link to="/addmovies"><Button className="button" variant="contained">Add Movie</Button></Link>
      </div>
    </div>
  );
}

export default Nav;
