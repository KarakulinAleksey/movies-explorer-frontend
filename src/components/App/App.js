import React from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import "./app.css";

import { СurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageError from "../PageError/PageError";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна
  const [navigationOpen, setNavigationOpen] = React.useState(false); //
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [userMovies, setUserMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [moviesMessage, setMoviesMessage] = React.useState("");
  const [shortMovies, setShortMovies] = React.useState(false);

  const history = useHistory();
  let location = useLocation();

  // определяем ширину App
  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };
  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  React.useEffect(() => {
    console.log('эффект 51');
    // console.log(loggedIn);
    // if (!(getLocalStorageCurrentUser()===null)){
    //   console.log('getLocalStorageCurrentUser()===!null');
    //   // setLoggedIn(true);
    //   setMovies(getLocalStorageMovies())
    //   setCurrentUser(getLocalStorageCurrentUser());
    //   // setSortedMovies(getLocalStorageSortedMovies());
    //   setUserMovies(getLocalStorageUserMovies());
    // }
    console.log('loggedIn', loggedIn);
    if (loggedIn || !(getLocalStorageCurrentUser()===null)){

    const path = location.pathname;
    const getAuthUser = mainApi.getAuthUser();
      getAuthUser
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push(path);
          // setMovies(getLocalStorageMovies());
          // setSortedMovies(getLocalStorageSortedMovies());
        }
      })
      .catch((err) => {
        console.log("Ошибка при получении данных пользователя ", err);
        history.push("/");
      });
    }
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  function getLocalStorageSavedMovies() {
    return JSON.parse(localStorage.getItem("savedMovies"));
  }

  function getLocalStorageCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  function getLocalStorageUserMovies() {
    return JSON.parse(localStorage.getItem("userMovies"));
  }

  function getLocalStorageSortedMovies() {
    return JSON.parse(localStorage.getItem("sortedMovies"));
  }

  function getLocalStorageMovies() {
    return JSON.parse(localStorage.getItem("movies"));
  }

  function getLocalStorageSearchWord() {
    return JSON.parse(localStorage.getItem("searchWord"));
  }
  

  function handleRegister(name, email, password) {
    console.log('функция handleRegister 111');
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setMessage("");
          handleLogin(email, password);
          // setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        if (err === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      });
  }

  function handleLogin(email, password) {
    console.log('функция handleLogin 132');
    auth
      .authorize(email, password)
      .then((data) => {
        if (!data) {
          setMessage("При автоизации произошла ошибка");
          return false;
        }
        setMessage("");
        setLoggedIn(true);
        history.push("/movies");
        return loggedIn;
      })
      .catch((err) => {
        setMessage("При авторизации произошла ошибка");
        if (err === 401) {
          setMessage("Пользователь с таким email не найден");
        }
        if (err === 400) {
          setMessage("Неверный email или пароль");
        }
      });
  }

  function handleUpdateUser(name, email) {
    mainApi
      .updateProfileUser(name, email)
      .then((editdData) => {
        setCurrentUser(editdData);
        setMessage("Данные профиля успешно обновлены");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err.status === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При изменении данных профиля произошла ошибка");
        }
      });
  }

  const handleSignOut = () => {
    onSignout();
    setUserMovies([]);
    setSortedMovies([]);
    setCurrentUser({});
    setLoggedIn(false);
    setMessage("");
    
    localStorage.removeItem("userMovies");
    localStorage.removeItem("sortedMovies");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("searchWord");
    // console.log('getLocalStorageMovies()',getLocalStorageMovies());
    
    // history.push("/");
  };

  function handleGetMovies(keyword) {
    console.log('функция handleGetMovies 192');
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = movies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      const checkedLikes = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id
        );
        return movie;
      });
      setSortedMovies(checkedLikes);
      localStorage.setItem("sortedMovies", JSON.stringify(checkedLikes));
    }
  }

  function handleLikeChange(movie) {
    const clickedMovie = movie.isSaved;
    if (clickedMovie) {
      handleDislikeClick(movie);
    } else {
      handleLikeClick(movie);
    }
  }

  function handleLikeClick(movie) {
    mainApi
      .addMovie(movie)
      .then((newMovie) => {
        if (!newMovie) {
          throw new Error("При добавлении фильма произошла ошибка");
        } else {
          localStorage.setItem(
            "userMovies",
            JSON.stringify((newMovie = [newMovie.movie, ...userMovies]))
          );

          setUserMovies(newMovie);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDislikeClick(movie) {
    const movieId = movie.id || movie.movieId;
    const selectedMovie = userMovies.find((item) => item.movieId === movieId);
    mainApi
      .deleteMovie(selectedMovie._id)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error("При удалении фильма произошла ошибка");
        } else {
          const newMoviesList = userMovies.filter((c) => c.movieId !== movieId);
          setUserMovies(newMoviesList);
        }
      })
      .catch((err) => console.log(`При удалении фильма: ${err}`));
  }

  function handleMovieDeleteButton(movie) {
    handleDislikeClick(movie);
  }

  function handleGetSavedMovies(keyword) {
    console.log('функция handleGetSavedMovies 263');
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = userMovies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      setUserMovies(findedMovies);
    }
  }

  function handleCheckBox() {
    console.log('функция handleCheckBox 278');
    setShortMovies(!shortMovies);
  }

  function filterShortMovies(arr) {
    console.log('функция filterShortMovies 284');
    // if (loggedIn){
      if (arr.length !== 0 || arr !== "undefind") {
        return arr.filter((movie) => (shortMovies ? movie.duration <= 40 : true));
      }
    // }
   
  }

  React.useEffect(() => {
    console.log('эффект loggedIn 294');
    if (loggedIn /*&& (getLocalStorageCurrentUser()===null)*/){
      Promise.all([mainApi.getAuthUser(), mainApi.getAllMovies()])
      .then(([userData, savedMovies]) => {
        localStorage.setItem("currentUser", JSON.stringify(userData));
        setCurrentUser(userData);
        const savedMoviesList = savedMovies.filter(
          (item) => item.owner === userData._id
        );
        localStorage.setItem("userMovies", JSON.stringify(savedMoviesList));
        setUserMovies(savedMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
    }
 
  }, [loggedIn]);

  React.useEffect(() => {
    console.log('эффект userMovies 314');
    checkSavedMovie(sortedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMovies]);

  React.useEffect(() => {
    console.log('эффект curredUser 319');
    // if (loggedIn&&(getLocalStorageMovies()===null)){
      if (loggedIn && (getLocalStorageMovies()===null)){
      moviesApi
      .getAllMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem("movies", JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.removeItem("movies");
      });
    // // }
    }else{
      setMovies(getLocalStorageMovies());
     
      if (getLocalStorageSortedMovies()){
        setSortedMovies(getLocalStorageSortedMovies());
      }

    }
   
  }, [currentUser]);

  function onSignout() {
    auth
      .signout()
      .then((res) => {
      })
      .catch((err) => {
        console.log("Ошибка выхода ", err);
      });
  }

  function checkSavedMovie(movie) {
    console.log('функция checkSaveMvie 352');
    // if (loggedIn){
      return (movie.isSaved = userMovies.some(
        (userMovie) => userMovie.movieId === movie.id
      ));
    // }
   
  }

  // открыть панель навигации Navigation
  function handlerNavigationOpen() {
    if (navigationOpen) {
      setNavigationOpen(false);
    } else if (!navigationOpen) {
      setNavigationOpen(true);
    }
  }

  console.log('loggedIn_All', loggedIn);
  console.log('userMovie', userMovies);

  return (
    <СurrentUserContext.Provider value={currentUser}>
      <div className="app" ref={ref}>
        <Switch>
          <Route exact path="/">
            <Header
             size={size}
             handlerNavigationOpen={handlerNavigationOpen}
             loggedIn={loggedIn}
             />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute
            path="/movies"
            size={size}
            handlerNavigationOpen={handlerNavigationOpen}
            component={Movies}
            // size={size}
            movies={filterShortMovies(sortedMovies)}
            onGetMovies={handleGetMovies}
            loggedIn={loggedIn}
            onAddMovie={handleLikeChange}
            onFilter={handleCheckBox}
            isShortMovie={shortMovies}
            message={moviesMessage}
            // savedMovies={userMovies} //%%%%
            // onSignOut={handleSignOut}
            likedMovies={checkSavedMovie}
          />

          <ProtectedRoute
            path="/saved-movies"
            size={size}
            handlerNavigationOpen={handlerNavigationOpen}
            component={SavedMovies}
            movies={filterShortMovies(userMovies)}
            onGetMovies={handleGetSavedMovies}
            loggedIn={loggedIn}
            onDelete={handleMovieDeleteButton}
            isShortMovie={shortMovies}
            onFilter={handleCheckBox}
            message={moviesMessage}
            //  isSavedMovies={true}
            onSignOut={handleSignOut}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            // setOnLogin={SetOnLogin}
            onEditUser={handleUpdateUser}
            onSignOut={handleSignOut}
            loggedIn={loggedIn}
            message={message}
            size={size}
            handlerNavigationOpen={handlerNavigationOpen}
          />

          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              loggedIn={loggedIn}
              message={message}
              // setOnlogin={SetOnLogin}
            />
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister} message={message} />
          </Route>

          <Route path="*">
            <PageError />
          </Route>

        </Switch>

        <Navigation
          navigationOpen={navigationOpen}
          handlerNavigationOpen={handlerNavigationOpen}
        />
        
      </div>
    </СurrentUserContext.Provider>
  );
}

export default App;
