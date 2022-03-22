import React, { Suspense } from "react";
import "./movies-cardlist.css";
import Preloader from "../../Movies/Preloader/Preloader";
// import MoviesCard from "../MoviesCard/MoviesCard";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));
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

  const [counter, setCounter] = React.useState(4);

  function showMoreMovies() {
    setCounter(counter + 4);
  }

  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
      <Suspense fallback={<Preloader />}>

        {props.message ? (
            <p className="movies-message">{props.message}</p>
          ) : (
          // props.searchMovies.map((element) => (
          props.movies
          .slice(0, counter)
          .map((movie) => (
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
          )}

        </Suspense>
      </div>

      {props.movies.length >= 4 &&
      props.movies.length > counter &&
      props.movies.length <= 100 &&
      !props.message ? (
				// <More showMoreMovies={showMoreMovies}  />
        <button
         className="movies-cardlist__button"
         type="button"
         onClick={showMoreMovies}
         >Ещё</button>
      ) : (
        ""
      )}
     
    </div>
  );
}
