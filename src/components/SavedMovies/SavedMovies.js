import React, { Suspense, useEffect, lazy } from "react";
import "./saved-movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Preloader from "../Movies/Preloader/Preloader"
import { mainApi } from "../../utils/MainApi";
import {СurrentUserContext} from "../../context/CurrentUserContext";
const MoviesCardList = lazy(() => import ("./MoviesCardList/MoviesCardList"));
// const MainArea = lazy(() => import('../MainArea/MainArea'));

// import { NavLink, useHistory, useLocation } from "react-router-dom";


export default function SavedMovies({size}) {
  const currentUser = React.useContext(СurrentUserContext);
  const [allSaveMovies, setAllSaveMovies] = React.useState([]); //--стейт всех сохраненных фильмов--//
  const [allSaveMoviesCurrentUser, setAllSaveMoviesCurrentUser] = React.useState([]);
  const [deleteMovie, setDeleteMovie] = React.useState(false);

 

  function SetDeleteMovie(){
    if (deleteMovie) {
      setDeleteMovie(false);
    } else if (!deleteMovie) {
      setDeleteMovie(true);
    }
  };

  function SetAllSaveMovies(movies){
    setAllSaveMovies(movies);
  };

  //--функция получения всех фильмщв конкретного пользователя----//
  function getAllSavedMoviesCurrentUser(allSaveMovies){
    return allSaveMovies.filter(
      (movie) => movie.owner === currentUser._id
    );
  }

  //---Запрос всех фильмов сохраненных пользователями------//
  function getAllMovies() {
    const getAllMovies = mainApi.getAllMovies();
      getAllMovies
      .then((item) => {
        SetAllSaveMovies(getAllSavedMoviesCurrentUser(item));

        // console.log('allSaveMovies', allSaveMovies);
        // setAllSaveMoviesCurrentUser(getAllSavedMoviesCurrentUser(allSaveMovies));
      })
      .catch((err) => {
        console.log("Запрос на добавления всех фильмов " + err);
      });
  }


  //--запрос всех фильмов из базы при монтировании компонента---//
  useEffect(()=>{
    getAllMovies();
    // console.log('currentUser',currentUser._id);
    // console.log('allSaveMovies', allSaveMovies);
    
  },[deleteMovie]);

  useEffect(()=>{
    // getAllMovies();
    setAllSaveMoviesCurrentUser(allSaveMovies);
    console.log('allSaveMovies', allSaveMovies);
    console.log('allSaveMoviesCurrentUser',allSaveMoviesCurrentUser);
  },[allSaveMovies]);

  return (
    <main className="saved-movies">
      <SearchForm size={size} />
      <FilterCheckbox />
      <Suspense fallback=
        {<Preloader />}>
          <MoviesCardList
              allSaveMovies={allSaveMovies}
              // allSaveMovies={allSaveMoviesCurrentUser}
              setAllSaveMovies={SetAllSaveMovies}
              setDeleteMovie={SetDeleteMovie}

          />
        </Suspense>
     
       
    </main>
  );
}
