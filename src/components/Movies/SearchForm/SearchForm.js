import React from "react";
import "./search-form.css";
import searchFormIcon from "../../../images/iconSearchform.svg";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SearchForm(props) {
  //---функция возвращает иконку поиск в зависимости от ширины экрана-------//
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

  function onChange(){

  }

  return (
    <div className="search-form">
      {searchFormIconElement()}
      <input
        name="search-input"
        placeholder="Фильм"
        type="text"
        className="search-form__search-input"
        value={""}
        onChange={onChange}
      />
      <div type='button' onClick={props.getAllMovies} className="search-form__button">Найти</div>
    </div>
  );
}
