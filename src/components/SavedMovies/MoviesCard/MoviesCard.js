import React from "react";
import "./movies-card.css";
import deleteButton from "../../../images/deleteButton.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {
  return (
    <>
      <div className="saved-movies-card">
        <p className="saved-movies-card__title">33 слова о дизайне</p>
        <p className="saved-movies-card__duration">1ч 42м</p>
        <button
          className="saved-movies-card__delete-button"
          type="button"
          onClick={"deleteMovies"}
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="saved-movies-card">
        <p className="saved-movies-card__title">33 слова о дизайне</p>
        <p className="saved-movies-card__duration">1ч 42м</p>
        <button
          className="saved-movies-card__delete-button"
          type="button"
          onClick={"deleteMovies"}
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="saved-movies-card">
        <p className="saved-movies-card__title">33 слова о дизайне</p>
        <p className="saved-movies-card__duration">1ч 42м</p>
        <button
          className="saved-movies-card__delete-button"
          type="button"
          onClick={"deleteMovies"}
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
    </>
  );
}
