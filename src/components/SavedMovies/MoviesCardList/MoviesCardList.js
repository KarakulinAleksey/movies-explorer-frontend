import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList(props) {
  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
        <MoviesCard />
      </div>
    </div>
  );
}
