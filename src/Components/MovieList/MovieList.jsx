import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/Images/fire.png";
import MovieCard from "./MovieCard"; // correct import

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=6c29159d86651fe8ad7c7e57feb2b486&language=en-US&page=1"
        );
        const data = await response.json();
        setMovies(data.results || []);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

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
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              rating={movie.vote_average}
              posterPath={movie.poster_path}
            />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </section>
  );
};

export default MovieList;
