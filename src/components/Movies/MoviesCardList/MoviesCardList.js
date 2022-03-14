import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList(props) {
  console.log(props.searchMovies);
 


  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
        {
          // props.searchMovies.foreach((element) => {
            <MoviesCard
              movies={props.searchMovies}
            />
          // })
        }
       
      </div>
      <div className="movies-cardlist__button">Ещё</div>
    </div>
  );
}
