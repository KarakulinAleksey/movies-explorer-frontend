import React from "react";
import "./movies-card.css";
import deleteButton from "../../../images/deleteButton.svg";

export default function MoviesCard(props) {
 
  function handleDeleteClick() {
    props.onDelete(props.movie);
  }

  return (
    <>
      <div className="saved-movies-card">
        <p className="saved-movies-card__title">{props.movie.nameRU}</p>
        <p className="saved-movies-card__duration">{`${Math.floor(
          props.movie.duration / 60
        )}ч ${props.movie.duration % 60}м`}</p>
        <button
          className="saved-movies-card__delete-button"
          type="button"
          onClick={handleDeleteClick}
          aria-label="кнопка удаления фильма"
        >
          <img
            className="saved-movies-card__like"
            src={deleteButton}
            alt="кнопка удаления фильма"
          />
        </button>
        <a
          href={props.trailerLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="saved-movies-card__thumbnail"
        >
          <img
            className="saved-movies-card__thumbnail"
            src={props.movie.thumbnail}
            alt={props.name}
          />
        </a>
      </div>
    </>
  );
}
