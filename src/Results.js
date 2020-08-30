import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";

function Results() {
  const [movies, setMovies] = useState([1, 2]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchTrending);
      console.log(req);
      return req;
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;