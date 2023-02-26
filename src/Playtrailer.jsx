import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import api from "./global"



function Playtrailer() {
  const [movieData, setmovieData] = useState({});
  const { id } = useParams();
  const matches = useMediaQuery('(min-width:600px)');
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
  
     <div className="trailer" 
     style={matches!=true?{
      marginTop: "80px",
     height: "80vh"
     
     }:{ display: "flex",
     justifyContent:"centre",
     alignItems:"centre",
     marginTop: "80px",
     height: "80vh"
     }}
     >
{matches!=true?<ReactPlayer
          url={movieData.trailer}
          width="100%"
          height="80vh"
          className="player"
          controls={true}
        />:<ReactPlayer
        url={movieData.trailer}
        width="60%"
        height="80vh"
        className="player"
        controls={true}
      />}
        
        <div className="details">
          <h2>{movieData.name}</h2>
          <br />
          <h4>{movieData.summary}</h4>
          <br />
          <h4>
            {" "}
            &#11088;
            <span
              style={
                movieData.rating > 8 ? { color: "green" } : { color: "red" }
              }
            >
              {movieData.rating}
            </span>
          </h4>
          <Link to={"/"} className="trailer_button">
          <Button variant="contained" size="large" ><ArrowBackIosIcon/>Back</Button>
          </Link>
        </div>
      </div>
  
  );
}

export default Playtrailer;
