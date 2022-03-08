import React from "react";
import "./pageError.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function login(props) {
  return (
    <div className="pageError">
      <p className="pageError__title">404</p>
      <p className="pageError__title-error">Страница не найдена</p>
      <NavLink className="pageError__link" to="/">
        Назад
      </NavLink>
    </div>
  );
}
