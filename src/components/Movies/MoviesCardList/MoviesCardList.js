import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList(props) {
  //  function sliceMass(mass){
  //    const newMass = mass;
  //    console.log(newMass);
  //    localStorage.removeItem('searchMovies');
  //    const cliseMass = newMass.slice(0,7);
  //    console.log(cliseMass);
  //    localStorage.setItem('searchMovies', JSON.stringify(newMass.splice(0,7)));
  //    console.log(JSON.parse(localStorage.getItem('searchMovies')));
  //    return cliseMass;
  //  }

  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
        {
          // props.searchMovies.map((element) => (
          props.movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              name={movie.nameRU}
              duration={movie.duration}
              id={movie._id}
              {...movie}
              isSavedMovies={props.isSavedMovies}
              onAddMovie={props.onAddMovie}
              onDelete={props.onDelete}
              savedMovies={props.savedMovies}
              likedMovies={props.likedMovies}
            />
          ))
        }
      </div>
      <div className="movies-cardlist__button">Ещё</div>
    </div>
  );
}
