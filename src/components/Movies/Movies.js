import React from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies(props) {
  return (
    <>
      <Header
        size={props.size}
        handlerNavigationOpen={props.handlerNavigationOpen}
      />
      <main className="movies">
        <SearchForm size={props.size} onGetMovies={props.onGetMovies} />
        <FilterCheckbox
          onFilter={props.onFilter}
          isShortMovie={props.isShortMovie}
        />
        <MoviesCardList
          movies={props.movies}
          onGetMovies={props.handleGetMovies}
          onAddMovie={props.onAddMovie}
          message={props.message}
          //  savedMovies={props.savedMovies}
          likedMovies={props.likedMovies}
        />
      </main>
      <Footer />
    </>
  );
}
