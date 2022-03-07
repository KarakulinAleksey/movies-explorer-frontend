import React from "react";
import "./login.css";
import logo from "../../images/logo.svg";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function login(props) {
  return (
    <div className="login">
      <NavLink className="login__image-link" to="/">
        <img className="login__image" src={logo} alt="логотип" />
      </NavLink>
      <p className="login__title">Рады видеть!</p>
      {/* <div class="login__container-input"> */}
      <p className="login__input-title">E-mail</p>
      <input
        name="email"
        placeholder="email"
        type="text"
        class="login__input"
        value={"pochta@yandex.ru"}
      />
      {/* <span class="login__error">Что-то пошло не так ...</span> */}
      <p className="login__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        class="login__input"
        value={"**********"}
      />
      {/* <span class="login__error">Что-то пошло не так ...</span> */}
      {/* </div> */}
      <button type="submit" className="login__button">
        Войти
      </button>
      <p className="login__title-input">
        Ещё не зарегистрированны?
        <button type="submit" className="login__button-input">
          Регистрация
        </button>
      </p>
    </div>
  );
}
