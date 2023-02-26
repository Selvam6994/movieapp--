import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./global"


function Editmovies() {
  const [movieData, setmovieData] = useState({});
  const { id } = useParams();

  const get_data_by_id = async () => {
    const data_by_id = await fetch(
      `${api}/${id}`,
      {
        method: "GET",
      }
    );
    const data = await data_by_id.json();
    setmovieData(data);
    console.log(data);
  };
  useEffect(() => {
    get_data_by_id();
  }, []);

  return (
    
    <div className="add_movie_form">
      {console.log(movieData.name)}
      <div className="form_content">
        <Box component="form" noValidate autoComplete="off">
          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="name"
              variant="outlined"
              defaultValue={movieData.name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="poster"
              variant="outlined"
              onChange={(event) => {
                setPoster(event.target.value);
              }}
            />
          </div>

          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="rating"
              variant="outlined"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
          </div>

          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="summary"
              variant="outlined"
              onChange={(event) => {
                setSummary(event.target.value);
              }}
            />
          </div>
          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="trailer"
              variant="outlined"
              onChange={(event) => {
                setTrailer(event.target.value);
              }}
            />
          </div>
        </Box>
        <Button variant="contained">Edit Movies</Button>
      </div>
    </div>
  );
}

export default Editmovies;
