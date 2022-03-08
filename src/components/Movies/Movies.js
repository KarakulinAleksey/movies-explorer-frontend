import React from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MovaviesCardList from "./MoviesCardList/MoviesCardList";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies(props) {
  return (
    <main className="movies">
      <SearchForm size={props.size} />
      <FilterCheckbox />
      <MovaviesCardList />
    </main>
  );
}
