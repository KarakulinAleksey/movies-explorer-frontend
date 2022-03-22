import React from "react";
import "./movies-card.css";
import heartRed from "../../../images/heartRed.svg";
import heartWhite from "../../../images/heartWhite.svg";
import { mainApi } from "../../../utils/MainApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
import { СurrentUserContext } from "../../../context/CurrentUserContext";

export default function MoviesCard(/*{movie}*/ props) {
  const baseUrl = "https://api.nomoreparties.co";
  const currentUser = React.useContext(СurrentUserContext);

  // const isLiked = movie.owner.some((i) => i === currentUser._id);

  // function onClickLike(){
  //   console.log(movie);
  //   const addMovie = mainApi.addMovie(
  //     movie.country,
  //     movie.director,
  //     movie.duration,
  //     movie.year,
  //     movie.description,
  //     `https://api.nomoreparties.co${movie.image.url}`,
  //     movie.trailerLink,
  //     `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
  //     movie.id,
  //     movie.nameRU,
  //     movie.nameEN,
  //     );

  //   addMovie
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log('Запрос на добавление фильма', err);
  //     })
  // }

  const isLiked = /*!props.isSavedMovies && */props.likedMovies(props.movie);

  function handleLikeClick() {
    console.log('props.movie.id', props.movie.id);
    props.onAddMovie({
      country: props.movie.country,
      director: props.movie.director,
      duration: props.movie.duration,
      year: props.movie.year,
      description: props.movie.description,
      image: `${baseUrl}${props.movie.image ? props.movie.image.url : ""}`,
      trailerLink: props.movie.trailerLink,
      thumbnail: `${baseUrl}${
        props.movie.image.formats.thumbnail
          ? props.movie.image.formats.thumbnail.url
          : ""
      }`,
      movieId: props.movie.id,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      isSaved: props.movie.isSaved,
    });
   
  }

  // function handleDeleteClick() {
  //   props.onDelete(props.movie);
  // }

  return (
    <>
      <div className="movies-card">
        <p className="movies-card__title">{/*props.name || */props.movie.nameRU}</p>
        <p className="movies-card__duration">{`${Math.floor(
          props.movie.duration / 60
        )}ч ${props.movie.duration % 60}м`}</p>

        {/* {props.isSavedMovies ? ( */}
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
        {/* ) : ( */}
          {/* <button
            className="movies-card__buttom-like"
            type="button"
            onClick={handleLikeClick}
            aria-label="кнопка лайк"
          >
            <img
              className="movies-card__like"
              src={heartWhite}
              alt="кнопка лайк"
            />
          </button> */}
        {/* )} */}
        <a
          href={props.trailerLink /*|| props.trailer*/}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="movies-card__thumbnail"
        >
            <img
              className="movies-card__thumbnail"
              // src={`https://api.nomoreparties.co/${movie.image.url}`}
              src={
                // props.isSavedMovies
                  // ? props.movie.image
                  // : `${baseUrl}${
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
