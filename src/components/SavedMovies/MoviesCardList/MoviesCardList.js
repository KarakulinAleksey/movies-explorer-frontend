import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMoviesCardList({allMovies, setAllMoviesSaveMovie, setDeleteMovie}) {
  console.log('cardList', allMovies);
  return (
    <div className="saved-movies-cardlist">
      <div className="saved-movies-cardlist__list">
        {
         allMovies.map((element) => (
          <MoviesCard
            key={element._id}
            movie={element}
            setAllMoviesSaveMovie={setAllMoviesSaveMovie}
            setDeleteMovie={setDeleteMovie}
          />
        ))
        }
        
      </div>
    </div>
  );
}
