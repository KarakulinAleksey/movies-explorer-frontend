import React from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MovaviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies(props) {
  const [allMovies, setAllMovies] = React.useState([]); //--стейт всех фильмов--
//---Запрос всех фильмов ------//
    function getAllMovies(){
    const getAllMovies = moviesApi.getAllMovies();
    getAllMovies
      .then((allMovies)=>{
        // console.log(allMovies);
        SetAllMovies(allMovies);
        
        // localStorage.setItem('allMovies', JSON.stringify(allMovies));
      })
      .catch((err)=>{
        console.log("Запрос на добавления всех фильмов " + err);
      });
    };

    function SetAllMovies(allMovies){
      setAllMovies(allMovies);
    };

    function sortMovies(allMovies, nameRU){
      const strAllName = allMovies.map((movie)=>{
        return {id : movie.id , str : movie.nameRU + movie.nameEN + movie.country + movie.director + movie.year };
        // console.log(movie.nameRU + movie.nameEN + movie.country + movie.director + movie.year);
        
      });
      console.log("Собранные названия фильмов", strAllName);
    }

    console.log("Все фильмы", allMovies);
    sortMovies(allMovies);

  return (
    <main className="movies">
      <SearchForm 
        size={props.size}
        getAllMovies={getAllMovies}
       />
      <FilterCheckbox />
      <MovaviesCardList />
    </main>
  );
}
