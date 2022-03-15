import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList(props) {
  // console.log(props.searchMovies);
 function sliceMass(mass){
   const newMass = mass;
   console.log(newMass);
  //  localStorage.removeItem('searchMovies');
   const cliseMass = newMass.slice(0,7);
   console.log(cliseMass);
   localStorage.setItem('searchMovies', JSON.stringify(newMass.splice(0,7)));
   console.log(JSON.parse(localStorage.getItem('searchMovies')));
   return cliseMass;
 }

  // sliceMass(props.searchMovies);
//  console.log(sliceMass());

  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
        {
          props.searchMovies.map((element) => (
            <MoviesCard
              key={element.id}
              movie={element}
            />
          ))
        }
       
      </div>
      <div className="movies-cardlist__button">Ещё</div>
    </div>
  );
}
