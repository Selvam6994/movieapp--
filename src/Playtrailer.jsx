import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'

function Playtrailer() {
  const [movieData, setmovieData] = useState({});
  const { id } = useParams();
  const get_data_by_id = async () => {
    const data_by_id = await fetch(
      `https://6301ec84c6dda4f287af4f45.mockapi.io/Movieapp/${id}`,
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
    <div>
    <div className="trailer">
     <ReactPlayer url={movieData.trailer} 
  width="80%"
  height="60vh"
     className="player"
     controls={true}
     />
     
    </div>
    <div>
    <h2>{movieData.name}</h2>
    </div>
    </div>
  );
}

export default Playtrailer;
