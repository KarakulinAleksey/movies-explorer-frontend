import React from "react";
import "./moviesCard.css";
import deleteButton from "../../../images/deleteButton.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {
  return (
    <>
      <div className="moviesCard">
        <p className="moviesCard__title">33 слова о дизайне</p>
        <p className="moviesCard__duration">1ч 42м</p>
        <img className="moviesCard__like" src={deleteButton} alt="кнопка лайк" />
        <img
          className="moviesCard__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="moviesCard">
        <p className="moviesCard__title">33 слова о дизайне</p>
        <p className="moviesCard__duration">1ч 42м</p>
        <img className="moviesCard__like" src={deleteButton} alt="кнопка лайк" />
        <img
          className="moviesCard__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="moviesCard">
        <p className="moviesCard__title">33 слова о дизайне</p>
        <p className="moviesCard__duration">1ч 42м</p>
        <img className="moviesCard__like" src={deleteButton} alt="кнопка лайк" />
        <img
          className="moviesCard__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
   
    </>
  );
}
