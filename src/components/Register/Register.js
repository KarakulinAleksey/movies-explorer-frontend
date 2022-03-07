import React from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Register(props) {
  return (
    <div className="register">
      <NavLink className="register__image-link" to="/">
        <img className="register__image" src={logo} alt="логотип" />
      </NavLink>
      <p className="register__title">Добро пожаловать!</p>
      {/* <div class="register__container-input"> */}
      <p className="register__input-title">Имя</p>
      <input
        name="name"
        placeholder="Имя"
        type="text"
        class="register__input"
        value={"Виталий"}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">E-mail</p>
      <input
        name="email"
        placeholder="email"
        type="text"
        class="register__input"
        value={"pochta@yandex.ru"}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        class="register__input"
        value={"**********"}
      />
      <span class="register__error">Что-то пошло не так ...</span>
      {/* </div> */}
      <button type="submit" className="register__button">
        Зарегистрироваться
      </button>
      <p className="register__title-input">
        Уже зарегистрированны?
        <button type="submit" className="register__button-input">
          Выйти
        </button>
      </p>
    </div>
  );
}
