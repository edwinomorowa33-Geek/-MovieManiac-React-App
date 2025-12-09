import React from "react";
import "./MovieList.css";
import Fire from "../../assets/Images/fire.png";
import MovieCard from "./MovieCard"; // correct import

const MovieList = () => {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        {/* Left side: heading */}
        <h2 className="movie_list_heading">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>

        {/* Right side: filters + dropdowns */}
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select className="Movie_sorting">
            <option value="">SortBy</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>

          <select className="Movie_sorting">
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="Movie_cards">
        <MovieCard /> {/* You can repeat this to show multiple cards */}
      </div>
    </section>
  );
};

export default MovieList;
