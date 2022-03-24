import React from "react";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import iconMenu from "../../images/icon-main-768.svg";

import "./header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  let className = "header header__section";

  function navLink() {
    if (
      (location.pathname === "/" && false) ||
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
            <button 
            type="button"
            className="header__button-menu" 
            onClick={props.handlerNavigationOpen}
            aria-label="кнопка открытия формы меню">
              <img
                className="header__signin"
                src={iconMenu}
                alt="кнопка меню"
              />
            </button>
        );
      }
    } else if (location.pathname === "/") {
      return (
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

      <NavLink className="header__logo" to="/">
        <img className="header__image" src={logo} alt="логотип" />
      </NavLink>

      {navLink()}
    </header>
  );
}
