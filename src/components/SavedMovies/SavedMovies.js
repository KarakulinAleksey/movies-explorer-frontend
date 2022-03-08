import React from "react";
import "./savedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MovaviesCardList from "./MoviesCardList/MoviesCardList";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SavedMovies(props) {
  return (
    <main className="savedMovies">
      <SearchForm size={props.size} />
      <FilterCheckbox />
      <MovaviesCardList />
    </main>
  );
}
