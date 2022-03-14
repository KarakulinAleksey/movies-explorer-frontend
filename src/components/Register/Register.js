import React from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Register(props) {
  function onChange(){

  }
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
        className="register__input"
        value={"Виталий"}
        onChange={onChange}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">E-mail</p>
      <input
        name="email"
        placeholder="email"
        type="text"
        className="register__input"
        value={"pochta@yandex.ru"}
        onChange={onChange}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        className="register__input"
        value={"**********"}
        onChange={onChange}
      />
      <span className="register__error">Что-то пошло не так ...</span>
      {/* </div> */}
      <button type="submit" className="register__button">
        Зарегистрироваться
      </button>
      <p className="register__title-input">
        Уже зарегистрированны?
        <Link className="register__link-input" to="/signin">
          Войти
        </Link>
      </p>
    </div>
  );
}