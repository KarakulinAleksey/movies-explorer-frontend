import React from "react";
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
import { Route, Switch} from "react-router-dom";

function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна
  const [navigationOpen, setNavigationOpen] = React.useState(false); //
  const [currentUser, setCurrentUser] = React.useState({});

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
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
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
