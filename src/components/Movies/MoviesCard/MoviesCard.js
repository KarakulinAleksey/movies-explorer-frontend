import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import heartWhite from "../../../images/heartWhite.svg";

export default function MoviesCard(props) {
  const baseUrl = "https://api.nomoreparties.co"; //перенести в конфиг

  const isLiked = props.likedMovies(props.movie);

  function handleLikeClick() {
    props.onAddMovie({
      country: props.movie.country || "Страна не известна",
      director: props.movie.director || "Директор не определен",
      duration: props.movie.duration || "0",
      year: props.movie.year || "Год не известен",
      description: props.movie.description || "Описание отсутствует",
      image: `${baseUrl}${props.movie.image ? props.movie.image.url : ""}`,
      trailerLink: props.movie.trailerLink || "Ссылка отсутствует",
      thumbnail: `${baseUrl}${
        props.movie.image.formats.thumbnail
          ? props.movie.image.formats.thumbnail.url
          : ""
      }`,
      movieId: props.movie.id,
      nameRU: props.movie.nameRU || "Название отсутсвует",
      nameEN: props.movie.nameEN || "Название отсутсвует",
      isSaved: props.movie.isSaved,
    });
   
  }


  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">{props.movie.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(
          props.movie.duration / 60
        )}ч ${props.movie.duration % 60}м`}</p>

          <button
            className="movies-card__buttom-like"
            type="button"
            onClick={handleLikeClick}
            aria-label="кнопка лайк"
          >
            <img
              className="movies-card__like"
              src={isLiked?heartRed:heartWhite}
              alt="кнопка лайк"
            />
          </button>
        <a
          href={props.trailerLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="movies-card__thumbnail"
        >
            <img
              className="movies-card__thumbnail"
              src={
                    `${baseUrl}${
                      props.movie.image ? props.movie.image.url : props.image
                    }`
              }
              alt={props.name}
            />
        </a>
      </div>
    </>
  );
}
