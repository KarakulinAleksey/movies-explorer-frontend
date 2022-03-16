import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard({movie}) {

  function onClickLike(){
    console.log("Нажата кнопка Like");
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
            <img className="movies-card__like" src={heartRed} alt="кнопка лайк" />
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
