import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Displaymovies } from "./Displaymovies";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import api from "./global"


function Movielist({ theme }) {
  const [movieList, setMovieList] = useState([]);

  const get_movie_data = async () => {
    const get_data = await fetch(
      `${api}`,
      {
        method: "GET",
      }
    );
    const json_data = await get_data.json();
    setMovieList(json_data);
  };

  useEffect(() => {
    get_movie_data();
  }, []);

  const delete_movie_data = async (name) => {
    const delete_data = await fetch(
      `${api}/${name}`,
      {
        method: "DELETE",
      }
    );
    get_movie_data();
  };

  return (
    <div
      className="body"
      style={
        theme != true
          ? { backgroundColor: "white", color: "#3B71CA" }
          : { backgroundColor: "#332D2D" }
      }
    >
      <div className="main">
        {movieList.map((ele) => (
          <Displaymovies
            theme={theme}
            key={ele.id}
            movieData={ele}
            name={ele.name}
            deleteMovie={
              <IconButton
                aria-label="DeleteIcon"
                color="error"
                onClick={() => {
                  delete_movie_data(ele.name);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editMovie={
              <Link to={`editMovies/${ele.id}`}>
                {" "}
                <IconButton aria-label="DeleteIcon" color="success">
                  <EditIcon />
                </IconButton>
              </Link>
            }
          ></Displaymovies>
        ))}
      </div>
    </div>
  );
}

export default Movielist;
