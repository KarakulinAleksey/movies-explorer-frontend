import React, { Suspense } from "react";
import "./movies-cardlist.css";
import Preloader from "../../Movies/Preloader/Preloader";
import { MIN_CARDS, MAX_CARDS, MIN_CARDS_MOBILE } from "../../../utils/config";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));

export default function MoviesCardList(props) {
  const [counter, setCounter] = React.useState(displayedCards(props.size));

  React.useEffect(() => {
    setCounter(displayedCards(props.size));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.size.clientWidth]);

  function displayedCards(size) {
    if (size.clientWidth > 321) {
      return MIN_CARDS;
    } else {
      return MIN_CARDS_MOBILE;
    }
  }

  function showMoreMovies() {
    setCounter(counter + displayedCards(props.size));
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
                  {...movie}
                  onAddMovie={props.onAddMovie}
                  likedMovies={props.likedMovies}
                />
              ))
          )}
        </Suspense>
      </div>

      {props.movies.length >= displayedCards(props.size) &&
      props.movies.length > counter &&
      props.movies.length <= MAX_CARDS &&
      !props.message ? (
        <button
          className="movies-cardlist__button"
          type="button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
