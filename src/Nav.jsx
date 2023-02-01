import React from "react";
import Button from '@mui/material/Button';
function Nav() {
  return (
    <div className="Nav">
      <span className="title">Movie Time</span>
      <div className="nav_buttons" placeholder="Search">
      <Button className="button" variant="contained">Add Movie</Button>
      </div>
    </div>
  );
}

export default Nav;
