import React from "react";
import "./saved-movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies(props) {
  
  return (
    <>
      <Header
        size={props.size}
        handlerNavigationOpen={props.handlerNavigationOpen}
      />
      <main className="saved-movies">
        <SearchForm size={props.size} onGetMovies={props.onGetMovies} />
        <FilterCheckbox
          onFilter={props.onFilter}
          isShortMovie={props.isShortMovie}
        />

        {props.movies.length > 0 ? (
          <MoviesCardList
            movies={props.movies}
            onDelete={props.onDelete}
            message={props.message}
          />
        ) : (
          <p className="saved-movies__message">
            У вас пока нет сохраненных фильмов
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
