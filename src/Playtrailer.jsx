import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Playtrailer() {
  const [movieData, setmovieData] = useState();
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
  };
  useEffect(() => {
    get_data_by_id();
  }, []);

  // console.log(movieData.trailer);
  return (
    <div>
     <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  );
}

export default Playtrailer;
