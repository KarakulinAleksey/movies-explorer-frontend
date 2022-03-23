import React, { Suspense } from "react";
import "./movies-cardlist.css";
import Preloader from "../../Movies/Preloader/Preloader";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));


export default function MoviesCardList(props) {

  const [counter, setCounter] = React.useState(7);

  function showMoreMovies() {
    setCounter(counter + 7);
  }

  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__list">
      <Suspense fallback={<Preloader />}>

        {props.message ? (
            <p className="movies-message">{props.message}</p>
          ) : (
          props.movies
          .slice(0, counter)
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              name={movie.nameRU}
              duration={movie.duration}
              id={movie._id}
              // {...movie}
              onAddMovie={props.onAddMovie}
              likedMovies={props.likedMovies}
            />
          ))
          )}

        </Suspense>
      </div>

      {props.movies.length >= 7 &&
      props.movies.length > counter &&
      props.movies.length <= 100 &&
      !props.message ? (
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
