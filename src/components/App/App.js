import React from "react";
import "./app.css";
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
import { Route, Switch, withRouter } from "react-router-dom";

function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна

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

  return (
    <div className="app" ref={ref}>
      <Switch>
        <Route exact path="/">
          {<Header size={size} />}
          <Main />
          <Footer />
        </Route>

        <Route exact path="/movies">
          {<Header size={size} />}
          <Movies size={size} />
          <Footer />
        </Route>

        <Route exact path="/saved-movies">
          {<Header size={size} />}
          <SavedMovies size={size} />
          <Footer />
        </Route>

        <Route exact path="/profile">
          {<Header size={size} />}
          <Profile />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
      {/* <PageError /> */}
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
