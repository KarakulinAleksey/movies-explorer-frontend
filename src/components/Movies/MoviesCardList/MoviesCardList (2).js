import React from "react";
import "./movies-cardlist.css";
import MoviesCard from "../MoviesCard/MoviesCard";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList(props) {
  // console.log(props.searchMovies);
<<<<<<< HEAD
 
=======
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
>>>>>>> f2bd136122594ff27ca4cf10b0690dd1decc34c4

  // sliceMass(props.searchMovies);
//  console.log(sliceMass());

  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
        {
          props.searchMovies.map((element) => (
            <MoviesCard
<<<<<<< HEAD
              movies={element}
=======
              key={element.id}
              movie={element}
>>>>>>> f2bd136122594ff27ca4cf10b0690dd1decc34c4
            />
          ))
        }
       
      </div>
      <div className="movies-cardlist__button">Ещё</div>
    </div>
  );
}
