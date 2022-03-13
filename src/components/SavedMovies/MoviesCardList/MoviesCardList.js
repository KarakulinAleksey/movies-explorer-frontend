import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMoviesCardList(props) {
  return (
    <div className="saved-movies-cardlist">
      <div className="saved-movies-cardlist__list">
        <MoviesCard />
      </div>
    </div>
  );
}
