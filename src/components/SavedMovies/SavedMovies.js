import React, { useEffect } from "react";
import "./saved-movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMovies(props) {
  const [allMovies, setAllMovies] = React.useState([]); //--стейт всех фильмов--//

  //---Запрос всех фильмов ------//
  function getAllMovies() {
    const getAllMovies = mainApi.getAllMovies();
      getAllMovies
      .then((item) => {
        setAllMovies(item);
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }

  //--запрос всех фильмов из базы при монтировании компонента---//
  useEffect(()=>{
    getAllMovies();
  },[]);

  return (
    <main className="saved-movies">
      <SearchForm size={props.size} />
      <FilterCheckbox />
      <MoviesCardList
        allMovies={allMovies}
       />
    </main>
  );
}
