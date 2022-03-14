import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import miniPoster_1 from "../../../images/miniPoster_1.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCard(props) {
  function onClickLike(){
    console.log("Нажата кнопка Like");
  }
  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      <div className="movies-card">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 42м</p>
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
          src={miniPoster_1}
          alt="минипостер"
        />
      </div>
      
  
    </>
  );
}
