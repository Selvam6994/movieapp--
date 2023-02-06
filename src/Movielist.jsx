import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Displaymovies } from "./Displaymovies";
import DeleteIcon from "@mui/icons-material/Delete";

function Movielist() {
  const [movieList, setMovieList] = useState([]);

  const get_movie_data = async () => {
    const get_data = await fetch(
      "https://6301ec84c6dda4f287af4f45.mockapi.io/Movieapp",
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

  const delete_movie_data = async (id) => {
    const delete_data = await fetch(
      `https://6301ec84c6dda4f287af4f45.mockapi.io/Movieapp/${id}`,
      {
        method: "DELETE",
      }
    );
    get_movie_data();
  };

  return (
    <div className="main">
      {movieList.map((ele) => (
        <Displaymovies
          key={ele.id}
          movieData={ele}
          id={ele.id}
          deleteMovie={
            <IconButton
              aria-label="DeleteIcon"
              color="error"
              onClick={() => {
                delete_movie_data(ele.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        ></Displaymovies>
      ))}
    </div>
  );
}

export default Movielist;
