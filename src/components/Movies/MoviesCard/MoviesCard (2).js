import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {

// console.log(props.movies[0]);
// console.log(props.movies[0].image.url);

  function onClickLike(){
    console.log("Нажата кнопка Like");
  }

  return (
    <>
      <div className="movies-card">
<<<<<<< HEAD
        <p className="movies-card__title">{props.movies.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(props.movies.duration/60)}ч ${props.movies.duration%60}м`}</p>
=======
        <p className="movies-card__title">{props.movie.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(props.movie.duration/60)}ч ${props.movie.duration%60}м`}</p>
>>>>>>> f2bd136122594ff27ca4cf10b0690dd1decc34c4
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
<<<<<<< HEAD
          src={`https://api.nomoreparties.co/${props.movies.image.url}`}
=======
          src={`https://api.nomoreparties.co/${props.movie.image.url}`}
>>>>>>> f2bd136122594ff27ca4cf10b0690dd1decc34c4
          alt="минипостер"
        />
      </div>
    </>
  );
}
