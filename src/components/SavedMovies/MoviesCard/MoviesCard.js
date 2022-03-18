import React from "react";
import "./movies-card.css";
import deleteButton from "../../../images/deleteButton.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";
import { mainApi } from "../../../utils/MainApi"

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard({ movie, setAllMoviesSaveMovie, setDeleteMovie }) {


  function onClickLike(){
    console.log("Нажата кнопка DeleteSavedMovies");
    const deleteMovie = mainApi.deleteMovie(movie._id);
    deleteMovie
      .then((deleteMovie)=>{
        console.log(deleteMovie);
        setAllMoviesSaveMovie((state) => state.filter((c) => c._id !== deleteMovie._id));
        setDeleteMovie();
      })
      .catch((err)=>{
        console.log('Ошибка при запросе на удаление фильма ', err);
      })
  }
  return (
    <>
      <div className="saved-movies-card">
        <p className="saved-movies-card__title">{movie.nameRU}</p>
        <p className="saved-movies-card__duration">{`${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`}</p>
        <button
          className="saved-movies-card__delete-button"
          type="button"
          onClick={onClickLike}
          aria-label="кнопка удаления фильма"
         >
            <img
              className="saved-movies-card__like"
              src={deleteButton}
              alt="кнопка удаления фильма"
        />
         </button>
        <img
          className="saved-movies-card__thumbnail"
          src={movie.image}
          alt="минипостер"
        />
      </div>
      
    </>
  );
}
