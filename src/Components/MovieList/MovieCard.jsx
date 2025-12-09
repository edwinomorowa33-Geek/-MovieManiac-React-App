import React from "react";
import "./MovieCard.css";
import dummy from "../../assets/Images/dummy.jpg"; // exact filename & extension


const MovieCard = () => {
  return (
    <a href="#" className="movie_card">
      <img src={dummy} alt="Movie Poster" />
    </a>
    
  );
};

export default MovieCard;

