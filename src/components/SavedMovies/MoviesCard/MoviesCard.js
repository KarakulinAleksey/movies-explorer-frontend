import React from "react";
import "./movies-card.css";
import deleteButton from "../../../images/deleteButton.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {
  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
        <img
          className="movies-card__like"
          src={deleteButton}
          alt="кнопка лайк"
        />
        <img
          className="movies-card__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
        <img
          className="movies-card__like"
          src={deleteButton}
          alt="кнопка лайк"
        />
        <img
          className="movies-card__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
        <img
          className="movies-card__like"
          src={deleteButton}
          alt="кнопка лайк"
        />
        <img
          className="movies-card__thumbnail"
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
    </>
  );
}
