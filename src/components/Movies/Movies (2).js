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

  //---запишем массив всех фильмов в стейт перемную allMovies--//
  function SetAllMovies(allMovies) {
    setAllMovies(allMovies);
  }

<<<<<<< HEAD
  useEffect(() => {
    // console.log(allMovies);
    setSearchMovies(SearchingMovies(allMovies, "2010"));
    // localStorage.setItem('searchMovies', searchMovies);
  }, [allMovies]);
=======
  //---записываю массив отфильтрованных фильмов по ключевому 
  //---слову в стейт переменную searchMovies--/  
  function SetSearchMovies(searchMovies){
    setSearchMovies(searchMovies);
  }

  function getMoviesKey(){
    getAllMovies();
    SetSearchMovies(SearchingMovies(allMovies, "2010"));
    localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
  }

  // useEffect(() => {
  //   SetSearchMovies(SearchingMovies(allMovies, "2010"));
  // }, [allMovies]);

  // useEffect(()=>{
    // localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
 // },[searchMovies]);
>>>>>>> f2bd136122594ff27ca4cf10b0690dd1decc34c4

  return (
    <main className="movies">
      <SearchForm
        size={props.size}
        getAllMovies={getMoviesKey}
      />
      <FilterCheckbox />
      <MoviesCardList
        searchMovies={searchMovies}
        setSearchMovies={SetSearchMovies}
      />
    </main>
  );
}
