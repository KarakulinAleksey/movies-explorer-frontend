import React, { useEffect } from "react";
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import SearchingMovies from "../../utils/SearchMovies";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies(props) {
  const [allMovies, setAllMovies] = React.useState([]); //--стейт всех фильмов
  const [allMoviesSaveMovie, SetAllMoviesSaveMovie] = React.useState([]); //--стейт всех фильмов сохраненных пользователем
  const [searchMovies, setSearchMovies] = React.useState([]); //--стейт отфильтрованных фильмов по ключевому слову
  const [keyWord, setKeyWord] = React.useState(''); //--стейт ключевого слова поиска
  const [searchOn, setSearchOn] = React.useState(false); //--стейт нажатия кнопки найти


  //--Состояние кнопки найти--//
  function SetSearchOn(){
    if (searchOn) {
      setSearchOn(false);
    } else if (!searchOn) {
      setSearchOn(true);
    }
  };

  console.log('setSearchOn',searchOn);

  //---Запрос всех фильмов ------//
  function getAllMovies() {
    const getAllMovies = moviesApi.getAllMovies();
      getAllMovies
      .then((item) => {
        setAllMovies(item);
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }

  //---Запрос всех фильмов сохраненных пользователем------//
  function getAllSavedMovies() {
    const getAllMovies = mainApi.getAllMovies();
      getAllMovies
      .then((item) => {
        SetAllMoviesSaveMovie(item);
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }

  //--запрос всех фильмов из базы при монтировании компонента---//
  useEffect(()=>{
    getAllMovies();
    getAllSavedMovies();
  },[]);

  console.log('allMoviesSaveMovie', allMoviesSaveMovie);
  console.log('getLocalStorageSavedMovies', getLocalStorageSavedMovies());

//--сохраняем все сохраненные фильмы в локальное хранилище---//
  useEffect(()=>{
    setLocalStorageSavedMovies();
  },[allMoviesSaveMovie]);

  //--сохраняем все отфильтрованные фильмы в локальное хранилище---//
  useEffect(()=>{
    setLocalStorageSearchMovies()
  },[searchOn]);

  //--при обновлении ключевого слова обновляем переменную 
  //--отфильтрованных фильмов--//
  useEffect(()=>{
    getSearchingMovies();
  },[keyWord]);

  

  //--читаем отфильтрованные значения из локальное хранилище--//
  function getLocalStorageMovies(){
   return JSON.parse(localStorage.getItem('searchMovies'));
  }

  //--записываю отфильтрованные значения в локальное хранилище--//
  function setLocalStorageSearchMovies(){
    localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
  }

 //--записываю сохраненные фильмы в локальное хранилище--//
 function setLocalStorageSavedMovies(){
  localStorage.setItem('savedMovies', JSON.stringify(allMoviesSaveMovie));
}

 //--читаем сохраненные фильмы из локальное хранилище--//
 function getLocalStorageSavedMovies(){
  return JSON.parse(localStorage.getItem('savedMovies'));
 }

  //--записываю в стейт ключевое слово поиска--//
  function SetKeyWord(enteredWord){
    setKeyWord(enteredWord);
  }

  //---записываю массив отфильтрованных фильмов по ключевому слову
  //--- в стейт переменную searchMovies--//  
  function SetSearchMovies(searchMovies){
    setSearchMovies(searchMovies);
  }

  //--записываю массив отфильтрованных фильмов в стейт--//
  function getSearchingMovies(){
    SetSearchMovies(SearchingMovies(allMovies, keyWord));
  }

//   useEffect(()=>{
//     setLocalStorageSearchMovies()
//     return()=>{setLocalStorageSearchMovies()};
//  });

  return (
    <main className="movies">
      <SearchForm
        size={props.size}
        setKeyWord={SetKeyWord}
        setSearchOn={SetSearchOn}

      />
      <FilterCheckbox />
      <MoviesCardList
        searchMovies={searchMovies}
        
      />
    </main>
  );
}
