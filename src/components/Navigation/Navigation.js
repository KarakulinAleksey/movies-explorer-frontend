import React from "react";
import "./navigation.css";
import imageExit from "../../images/deleteButton.svg";
import imageProfile from "../../images/profile.svg";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <>
      <div
        className={`navigation ${
          props.navigationOpen ? "navigation__show" : ""
        }`}
      >
        <div className="navigation__cover"></div>
        <div className="navigation-menu">
          <button
            className="navigation-menu__exit"
            type="button"
            onClick={props.handlerNavigationOpen}
          >
            <img
              className="navigation-menu__image-exit"
              src={imageExit}
              alt="кнопка выход"
            ></img>
          </button>
          <NavLink
            exact
            className="navigation-menu__link"
            activeClassName="navigation-menu__link-active"
            to="/"
          >
            Главная
          </NavLink>

          <NavLink
            className="navigation-menu__link"
            activeClassName="navigation-menu__link-active"
            to="/movies"
          >
            Фильмы
          </NavLink>

          <NavLink
            className="navigation-menu__link"
            activeClassName="navigation-menu__link-active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>

          <NavLink className="navigation-menu__link" to="/profile">
            <img
              className="navigation-menu__image-profile"
              src={imageProfile}
              alt="кнопка профиля"
            ></img>
          </NavLink>
        </div>
      </div>
    </>
  );
}
