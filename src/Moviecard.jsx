import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Badge from "@mui/material/Badge";

function Moviecard(ele) {
  const [summary, setSummary] = useState("none");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "400px",
          height: "fit-to-content",
        },
      }}
    >
      <Paper className="movie-card" elevation={3}>
        <div>
          <img className="poster" src={ele.movieData.poster} alt="" />
          <div className="title-rating">
            <p>{ele.movieData.name}</p>
            {summary != "none" ? (
              <IconButton
                aria-label="KeyboardArrowUpIcon"
                color="primary"
                onClick={() => setSummary("none")}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="KeyboardArrowDownIcon"
                color="primary"
                onClick={() => setSummary("block")}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            )}

            <p className="rating">
              &#11088;
              <span
                style={
                  ele.movieData.rating > 8
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {ele.movieData.rating}
              </span>
            </p>
          </div>
          <div className="movie-summary">
            <p style={{ display: summary }}>{ele.movieData.summary}</p>
          </div>
          <Button href={ele.movieData.trailer}>Watch Trailer</Button>
        </div>
        <div>
          <IconButton
            aria-label="KeyboardArrowDownIcon"
            color="warning"
            onClick={() => setLike(like + 1)}
          >
            <Badge badgeContent={like} color="success">
              <ThumbUpAltIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="ThumbDownAltIcon"
            color="warning"
            onClick={() => setDislike(dislike + 1)}
          >
            <Badge badgeContent={dislike} color="error">
              <ThumbDownAltIcon />
            </Badge>
          </IconButton>
        </div>
      </Paper>
    </Box>
  );
}

export default Moviecard;
