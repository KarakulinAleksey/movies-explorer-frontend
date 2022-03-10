import React from "react";
import "./navigation.css";
import imageExit from "../../images/deleteButton.svg";
import imageProfile from "../../images/profile.svg";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Navigation(props) {
  return (
    <>
      <div className="navigation">
        <div className="navigation__cover"></div>
        <div className="navigationMenu">
          <button className="navigationMenu__exit">
            <img className="navigationMenu__imageExit" src={imageExit}></img>
          </button>
          <NavLink className="navigationMenu__link" to="/">
            Главная
          </NavLink>
          <div className="navigationMenu__border-bottom-main"></div>
          <NavLink className="navigationMenu__link" to="/movies">
            Фильмы
          </NavLink>
          <div className="navigationMenu__border-bottom-movies"></div>
          <NavLink className="navigationMenu__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
          <div className="navigationMenu__border-bottom-savemovies"></div>
          <NavLink className="navigationMenu__link" to="/profile">
            <img
              className="navigationMenu__imageProfile"
              src={imageProfile}
            ></img>
          </NavLink>
        </div>
      </div>
    </>
  );
}
