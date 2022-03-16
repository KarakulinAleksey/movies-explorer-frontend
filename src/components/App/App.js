import React from "react";
import { Route, Switch} from "react-router-dom";
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


function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна
  const [navigationOpen, setNavigationOpen] = React.useState(false); //
  const [currentUser, setCurrentUser] = React.useState({});
  const [onLogin, setOnLogin] = React.useState(false);
  

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
    const getAuthUser = mainApi.getAuthUser();
    console.log(onLogin);
    getAuthUser
     .then((user)=>{
        console.log(user);
        setCurrentUser(user);
     })
     .catch((err)=>{
       console.log("Ошибка при получении данных пользователя ", err);
     });
     
  },[onLogin]);



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
            setOnlogin={SetOnLogin}
          />
        </Route>

        <Route path="/signup">
          <Register />
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
