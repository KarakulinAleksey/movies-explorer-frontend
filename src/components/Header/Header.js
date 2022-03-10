import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import iconMenu from "../../images/icon-main-768.svg";
import React from "react";
import "./header.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Header(props) {
  // console.log(props.size.clientWidth);
  // const history = useHistory();
  const location = useLocation();
  let className = "header header__section";

  function navLink() {
    if (
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile"
    ) {
      if (props.size.clientWidth > 768) {
        return (
          <>
            <div className="header__signup-block">
              <NavLink
                exact
                to="/movies"
                activeClassName="header__signup-block_active"
                className="header__link-movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                activeClassName="header__signup-block_active"
                className="header__link-movies"
              >
                Сохраненные фильмы
              </NavLink>
            </div>

            <NavLink className="header__signin-link" to="/profile">
              <img
                className="header__signin"
                src={profile}
                alt="кнопка профайл"
              />
            </NavLink>
          </>
        );
      } else {
        return (
          <>
            {/* <div className="header__signup-block">
                    <NavLink className="header__link-movies" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__link-movies" to="/saved-movies">Сохраненные фильмы</NavLink>
                </div>  */}

            <NavLink className="header__logo" to="/navigation">
              <img
                className="header__signin"
                src={iconMenu}
                alt="кнопка меню"
              />
            </NavLink>
          </>
        );
      }
    } else if (location.pathname === "/") {
      return (
        // <button className="header__button" onClick={'onSingOut'}>
        //   Выйти
        // </button>
        <div className="header__signup-block">
          <NavLink to="/signup" className="header__signup">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="header__button">
            Войти
          </NavLink>
        </div>
      );
    }
  }

  function backGroundColor() {
    if (
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile"
    ) {
      return "  header_back-color-movie";
    } else if (location.pathname === "/") {
      return "";
    }
  }

  return (
    <header className={(className += backGroundColor())}>
      {/* <div>
                     clientHeight: {props.size.clientHeight}, clientWidth:{props.size.clientWidth}
                </div> */}

      <NavLink className="header__logo" to="/">
        <img className="header__image" src={logo} alt="логотип" />
      </NavLink>

      {navLink()}
    </header>
  );
}
