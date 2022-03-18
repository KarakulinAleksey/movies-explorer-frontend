import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import heartWhite from "../../../images/heartWhite.svg";
import { mainApi } from "../../../utils/MainApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard({movie}) {

  function onClickLike(){
    console.log(movie);
    const addMovie = mainApi.addMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      `https://api.nomoreparties.co${movie.image.url}`,
      movie.trailerLink,
      `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movie.id,
      movie.nameRU,
      movie.nameEN,
      );
  
    addMovie
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('Запрос на добавление фильма', err);
      })
  }

  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">{movie.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`}</p>
        <button
          className="movies-card__buttom-like"
          type="button"
          onClick={onClickLike}
          aria-label="кнопка лайк"
         >
            <img className="movies-card__like" src={heartWhite} alt="кнопка лайк" />
        </button>
        <img
          className="movies-card__thumbnail"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt="минипостер"
        />
      </div>
    </>
  );
}
