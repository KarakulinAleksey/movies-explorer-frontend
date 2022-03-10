import React from "react";
import "./search-form.css";
import searchFormIcon from "../../../images/iconSearchform.svg";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SearchForm(props) {
  function searchFormIconElement() {
    if (props.size.clientWidth > 500) {
      return (
        <img
          className="search-form__icon"
          src={searchFormIcon}
          alt="иконка поиска"
        />
      );
    }
  }

  return (
    <div className="search-form">
      {searchFormIconElement()}
      <p className="search-form__title">Фильм</p>
      <div className="search-form__button">Найти</div>
    </div>
  );
}
