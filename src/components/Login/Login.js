import React from "react";
import "./login.css";
import logo from "../../images/logo.svg";
import * as auth from "../../utils/auth"
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Login(props) {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e){
    setEmail(e.target.value);
  }

  function handleChangePassword(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .authorize(password, email)
      .then((res) => {
        console.log(res);
       // if (res.data) {
        // if (!(typeof res === "undefined")) { // 15
        //   openInfoTooltipPopup(true);
          history.push("/movies");
        // } else {
        //   openInfoTooltipPopup(false);
        // }
      })
      .catch((err) => {
        console.log("Ошибка входа ", err);
        // openInfoTooltipPopup(false);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="login">
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
        className="login__input"
        value={email}
        onChange={handleChangeEmail}
      />
      {/* <span class="login__error">Что-то пошло не так ...</span> */}
      <p className="login__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        className="login__input"
        value={password}
        onChange={handleChangePassword}
      />
      {/* <span class="login__error">Что-то пошло не так ...</span> */}
      {/* </div> */}
      <button type="submit" className="login__button">
        Войти
      </button>
      <p className="login__title-input">
        Ещё не зарегистрированны?
        <Link className="login__link-input" to="/signup" >
          Регистрация
        </Link>
      </p>
    </form>
  );
}
