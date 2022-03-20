import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMoviesCardList({allSaveMovies, setAllSaveMovies, setDeleteMovie}) {
  console.log('cardList', allSaveMovies);
  return (
    <div className="saved-movies-cardlist">
      <div className="saved-movies-cardlist__list">
        {
         allSaveMovies.map((element) => (
          <MoviesCard
            key={element._id}
            movie={element}
            setAllSaveMovies={setAllSaveMovies}
            setDeleteMovie={setDeleteMovie}
          />
        ))
        }
        
      </div>
    </div>
  );
}
