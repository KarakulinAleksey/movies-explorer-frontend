import React, { /*Suspense*/ } from "react";
import "./movies-cardlist.css";
import Preloader from "../../Movies/Preloader/Preloader";
// const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMoviesCardList(props) {
  
  return (
  
    <div className="saved-movies-cardlist">
      <div className="saved-movies-cardlist__list">
        {/* <Suspense fallback={<Preloader />}>
        {props.message ? (
            <p className="movies-message">{props.message}</p>
          ) : (
            props.movies
              .map((movie, id) => (
                <MoviesCard
                  movie={movie}
                  name={movie.nameRU}
                  duration={movie.duration}
                  key={id}
                  id={movie._id}
                  {...movie}
                  onDelete={props.onDelete}
                />
              ))
          )}
        </Suspense> */}


        {props.isLoader?<Preloader />:(props.message ? (
            <p className="movies-message">{props.message}</p>
          ) : (
            props.movies
              .map((movie, id) => (
                <MoviesCard
                  movie={movie}
                  name={movie.nameRU}
                  duration={movie.duration}
                  key={id}
                  id={movie._id}
                  {...movie}
                  onDelete={props.onDelete}
                />
              ))
          ))}
        
      </div>
    </div>
    
  );
}
