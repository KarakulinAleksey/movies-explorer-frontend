import React, { useEffect } from "react";
import "./saved-movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMovies({size}) {
  const [allMovies, setAllMoviesSaveMovie] = React.useState([]); //--стейт всех сохраненных фильмов--//
  const [deleteMovie, setDeleteMovie] = React.useState(false);

  function SetDeleteMovie(){
    if (deleteMovie) {
      setDeleteMovie(false);
    } else if (!deleteMovie) {
      setDeleteMovie(true);
    }
  };

  function SetAllMoviesSaveMovie(movies){
    setAllMoviesSaveMovie(movies);
  };

  //---Запрос всех фильмов ------//
  function getAllMovies() {
    const getAllMovies = mainApi.getAllMovies();
      getAllMovies
      .then((item) => {
        SetAllMoviesSaveMovie(item);
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }

  //--запрос всех фильмов из базы при монтировании компонента---//
  useEffect(()=>{
    getAllMovies();
  },[deleteMovie]);

  return (
    <main className="saved-movies">
      <SearchForm size={size} />
      <FilterCheckbox />
      <MoviesCardList
        allMovies={allMovies}
        setAllMoviesSaveMovie={SetAllMoviesSaveMovie}
        setDeleteMovie={SetDeleteMovie}
       />
    </main>
  );
}
