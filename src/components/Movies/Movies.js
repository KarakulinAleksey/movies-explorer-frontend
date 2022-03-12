import React from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MovaviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies(props) {
//---Запрос всех фильмов при монтировании страницы------//
  React.useEffect(()=>{
    const getAllMovies = moviesApi.getAllMovies();
    getAllMovies
      .then((allMovies)=>{
        console.log(allMovies);
      })
      .catch((err)=>{
        console.log("Запрос на добавления всех фильмов " + err);
      });
  },[]);

  return (
    <main className="movies">
      <SearchForm size={props.size} />
      <FilterCheckbox />
      <MovaviesCardList />
    </main>
  );
}
