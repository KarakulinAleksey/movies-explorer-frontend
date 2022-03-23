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
    const path = location.pathname;
    const getAuthUser = mainApi.getAuthUser();
    getAuthUser
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push(path);
        }
      })
      .catch((err) => {
        console.log("Ошибка при получении данных пользователя ", err);
        history.push("/");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setMessage("");
          handleLogin(email, password);
          setLoggedIn(true);
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
    localStorage.removeItem("userMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("sortedMovies");
    localStorage.removeItem("currentUser");
    setUserMovies([]);
    setSortedMovies([]);
    setCurrentUser({});
    setLoggedIn(false);
    setMessage("");
    history.push("/");
  };

  function handleGetMovies(keyword) {
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
    setShortMovies(!shortMovies);
  }

  function filterShortMovies(arr) {
    if (arr.length !== 0 || arr !== "undefind") {
      return arr.filter((movie) => (shortMovies ? movie.duration <= 40 : true));
    }
  }

  function getLocalStorageSavedMovies() {
    return JSON.parse(localStorage.getItem("savedMovies"));
  }

  React.useEffect(() => {
    // console.log('loggedIngetLocalStorageSavedMovies', getLocalStorageSavedMovies());
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
  }, [loggedIn]);

  React.useEffect(() => {
    checkSavedMovie(sortedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMovies]);

  React.useEffect(() => {
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
  }, [currentUser]);

  function onSignout() {
    auth
      .signout()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Ошибка выхода ", err);
      });
  }

  function checkSavedMovie(movie) {
    return (movie.isSaved = userMovies.some(
      (userMovie) => userMovie.movieId === movie.id
    ));
  }

  // открыть панель навигации Navigation
  function handlerNavigationOpen() {
    if (navigationOpen) {
      setNavigationOpen(false);
    } else if (!navigationOpen) {
      setNavigationOpen(true);
    }
  }

  return (
    <СurrentUserContext.Provider value={currentUser}>
      <div className="app" ref={ref}>
        <Switch>
          <Route exact path="/">
            <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
            <Movies
              size={size}
              movies={filterShortMovies(sortedMovies)}
              onGetMovies={handleGetMovies}
              loggedIn={loggedIn}
              onAddMovie={handleLikeChange}
              onFilter={handleCheckBox}
              isShortMovie={shortMovies} //убрать показывает состояние
              message={moviesMessage}
              savedMovies={userMovies} //%%%%
              onSignOut={handleSignOut}
              likedMovies={checkSavedMovie}
            />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
            <SavedMovies
              size={size}
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
            <Footer />
          </Route>

          <Route path="/profile">
            <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
            <Profile
              // setOnLogin={SetOnLogin}
              onEditUser={handleUpdateUser}
              onSignOut={handleSignOut}
              loggedIn={loggedIn}
              message={message}
            />
          </Route>

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

          <Route path="/page-error">
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
