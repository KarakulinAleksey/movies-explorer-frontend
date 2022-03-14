import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {

console.log(props.movies[0]);
console.log(props.movies[0].image.url);

  function onClickLike(){
    console.log("Нажата кнопка Like");
  }

  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">{props.movies[0].nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(props.movies[0].duration/60)}ч ${props.movies[0].duration%60}м`}</p>
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
          src={`https://api.nomoreparties.co/${props.movies[0].image.url}`}
          alt="минипостер"
        />
      </div>
    </>
  );
}
