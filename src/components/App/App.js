import React from "react";
import { Route, Switch, useLocation, useHistory} from "react-router-dom";
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
import {mainApi} from "../../utils/MainApi"
import * as auth from "../../utils/auth";

function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна
  const [navigationOpen, setNavigationOpen] = React.useState(false); //
  const [currentUser, setCurrentUser] = React.useState({});
  const [onLogin, setOnLogin] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState("");

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

//--Записываю текущего пользователя в context--//
  // React.useEffect(() => {
  //   // const pach = location.pathname;
  //   const getAuthUser = mainApi.getAuthUser();
  //   console.log(onLogin);
  //   getAuthUser
  //    .then((user)=>{
  //       console.log('getAuthUser', user);
  //       // setOnLogin(true);
  //       setCurrentUser(user);
  //       // history.push(pach);
  //    })
  //    .catch((err)=>{
  //      console.log("Ошибка при получении данных пользователя ", err);
  //      history.push("/");
  //    });
     
  // },[onLogin]);

  //--при мотрировании страницы если пользователь не разлогинился
  //--получаем его данные 
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
           //--удалить куки???
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister(name, password, email ) {
    console.log(email);
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
         //--удалить куки???
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
       //--удалить куки???
      });
  }

  function SetOnLogin(param){
    setOnLogin(param);
  };

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
    
          />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
          <SavedMovies size={size} />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header size={size} handlerNavigationOpen={handlerNavigationOpen} />
          <Profile
            setOnLogin={SetOnLogin}
          />
        </Route>

        <Route path="/signin">
          <Login
            onLogin={handleLogin}
            // setOnlogin={SetOnLogin}
          />
        </Route>

        <Route path="/signup">
          <Register 
            onRegister={handleRegister}
          />
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
