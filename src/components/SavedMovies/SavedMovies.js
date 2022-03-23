import React from "react";
import "./saved-movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function SavedMovies(props) {

  return (
    <main className="saved-movies">
      <SearchForm
       size={props.size}
       onGetMovies={props.onGetMovies}
        />
      <FilterCheckbox
         onFilter={props.onFilter}
         isShortMovie={props.isShortMovie}
      />
    
          {props.movies.length > 0 ? (
          <MoviesCardList
					  movies={props.movies}
            // onGetMovies={props.onGetMovies}
            onDelete={props.onDelete}
            message={props.message}
          />
          ) : (
            <p className="movies-message">У вас пока нет сохраненных фильмов</p>
          )}
    </main>
  );
}
