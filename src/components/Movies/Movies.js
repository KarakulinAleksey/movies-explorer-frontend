import React, { useEffect } from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import SearchingMovies from "../../utils/SearchMovies";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies(props) {
  const [allMovies, setAllMovies] = React.useState([]); //--стейт всех фильмов--//
  const [searchMovies, setSearchMovies] = React.useState([]); //--стейт отфильтрованных фильмов по ключевому слову--//
  //---Запрос всех фильмов ------//
  function getAllMovies() {
    const getAllMovies = moviesApi.getAllMovies();
    getAllMovies
      .then((allMovies) => {
        // console.log(allMovies);
        SetAllMovies(allMovies);

        // localStorage.setItem('allMovies', JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }

  function SetAllMovies(allMovies) {
    setAllMovies(allMovies);
  }

  useEffect(() => {
    console.log(allMovies);
    setSearchMovies(SearchingMovies(allMovies, "2010"));
  }, [allMovies]);

  return (
    <main className="movies">
      <SearchForm
        size={props.size}
        getAllMovies={getAllMovies}
      />
      <FilterCheckbox />
      <MoviesCardList
        searchMovies={searchMovies}
      />
    </main>
  );
}
