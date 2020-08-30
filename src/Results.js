import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([1, 2]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(selectedOption);
      console.log(req);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
