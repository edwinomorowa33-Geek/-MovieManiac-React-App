import React from "react";
import "./MovieList.css";
import Fire from "../../assets/Images/fire.png";

const MovieList = () => {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>

        <div className="movie_list_fs">
            <ul className="movie_filter">
                <li className="movie_filter_item"> 8+ Star</li>
                <li className="movie_filter_item"> 7+ Star</li>
                <li className="movie_filter_item"> 6+ Star</li>
            </ul>
           <select name="" id="" className="Movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
           </select>

           <select name="" id="" className="Movie_sorting">
            <option value="">Ascending</option>
            <option value="">Decending</option>
           </select>
        </div>
      </header>
    </section>
  );
};

export default MovieList;
