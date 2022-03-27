import React from "react";
import "./page-error.css";
import { NavLink} from "react-router-dom";

export default function login(props) {
  return (
    <div className="page-error">
      <p className="page-error__title">404</p>
      <p className="page-error__title-error">Страница не найдена</p>
      <NavLink className="page-error__link" to="/">
        Назад
      </NavLink>
    </div>
  );
}
