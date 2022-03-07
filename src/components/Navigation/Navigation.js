import React from "react";
import "./navigation.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Navigation(props) {
  return (
    <>
      <div className="navigation">
      <div className="navigation__cover"></div>
      <div className="navigationMenu">
        <NavLink className="navigationMenu__link" to="/">
          Главная
        </NavLink>
        <NavLink className="navigationMenu__link" to="/">
          Фильмы
        </NavLink>
        <NavLink className="navigationMenu__link" to="/">
          Сохранённые фильмы
        </NavLink>
      </div>
      </div>
    </>
  );
}
