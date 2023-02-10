import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Addmovies() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const addMovies = () => {
    const newMovieList = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    const movie = async () => {
      await fetch("https://6301ec84c6dda4f287af4f45.mockapi.io/Movieapp", {
        method: "POST",
        body: JSON.stringify(newMovieList),
        headers: { "Content-Type": "application/json" },
      });
    };

    movie();
    navigate("/");
  };

  return (
    <div className="add_movie_form">
      <div className="form_content">
        <Box component="form" noValidate autoComplete="off">
          <div className="input_div">
            <TextField
              className="text_field"
              id="outlined-basic"
              label="name"
              variant="outlined"
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
        <Button variant="contained" onClick={addMovies}>
          Add Movies
        </Button>
      </div>
      <p style={{ color: "red" }}>
        {name}
        {rating}
      </p>
    </div>
  );
}

export default Addmovies;
