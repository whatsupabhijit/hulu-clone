import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://avatars0.githubusercontent.com/u/28159230?s=400&u=4b77f549e563cf21a377c95a0168f2c2ee76f23d&v=4"
        alt=""
      />
      <p>Movie SUmmary goes here</p>
      <h2>Movie Title</h2>
      <p>Likes and hearts</p>
    </div>
  );
}

export default VideoCard;
