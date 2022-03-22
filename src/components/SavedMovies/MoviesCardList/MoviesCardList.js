// import React from "react";
import React, { Suspense } from "react";
import "./movies-cardlist.css";
import Preloader from "../../Movies/Preloader/Preloader";
import More from "../../More/More";
// import MoviesCard from "../MoviesCard/MoviesCard";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMoviesCardList(/*{allSaveMovies, setAllSaveMovies, setDeleteMovie}*/props) {
  // console.log('cardList', allSaveMovies);
  const [counter, setCounter] = React.useState(4);

  function showMoreMovies() {
    setCounter(counter + 4);
  }

  return (
    <>
    <div className="saved-movies-cardlist">
      <div className="saved-movies-cardlist__list">
        {/* {
         allSaveMovies.map((element) => (
          <MoviesCard
            key={element._id}
            movie={element}
            setAllSaveMovies={setAllSaveMovies}
            setDeleteMovie={setDeleteMovie}
          />
        ))
        } */}
        <Suspense fallback={<Preloader />}>
        {props.message ? (
            <p className="movies-message">{props.message}</p>
          ) : (
            props.movies
              .slice(0, counter)
              .map((movie, id) => (
                <MoviesCard
                  movie={movie}
                  name={movie.nameRU}
                  duration={movie.duration}
                  key={id}
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
    </div>
     {props.movies.length >= 4 &&
      props.movies.length > counter &&
      props.movies.length <= 100 &&
      !props.message ? (
				<More showMoreMovies={showMoreMovies}  />
      ) : (
        ""
      )}
    </>
  );
}
