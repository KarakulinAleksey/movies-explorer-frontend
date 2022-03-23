import React from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


export default function Movies(props) {
  return (
    <main className="movies">
      <SearchForm
        size={props.size}
        onGetMovies={props.onGetMovies}
      />
      <FilterCheckbox 
        onFilter={props.onFilter}
        isShortMovie={props.isShortMovie}
      />
      <MoviesCardList
       movies={props.movies}
       onGetMovies={props.handleGetMovies}
       onAddMovie={props.onAddMovie}
       message={props.message}
       savedMovies={props.savedMovies}
       likedMovies={props.likedMovies}
       />
    </main>
  );
}
