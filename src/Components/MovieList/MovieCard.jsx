import React from "react";
import "./MovieCard.css";
import dummy from "../../assets/Images/dummy.jpg";
import Star from "../../assets/Images/star.png";

const MovieCard = ({
  title = "Movie Title",
  date = "10-20-2020",
  rating = 8.0,
  posterPath = null, // new prop for dynamic poster
}) => {
  // TMDB full poster URL or fallback
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : dummy;

  return (
    <a href="#" className="movie_card">
      <img src={posterUrl} alt="Movie Poster" className="movie_poster" />

      <div className="movie_details">
        <h3 className="movie_title">{title}</h3>
        <div className="movie_date_rating">
          <p className="movie_date">{date}</p>
          <p className="movie_rating">
            {rating} <img src={Star} alt="star icon" className="class_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
