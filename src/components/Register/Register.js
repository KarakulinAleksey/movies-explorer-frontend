import React from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

export default function Register(props) {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeName(e){
    setName(e.target.value);
  }

  function handleChangeEmail(e){
    setEmail(e.target.value);
  }

  function handleChangePassword(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
    // auth
    //   .register(name, password, email)
    //   .then((res) => {
    //     console.log(res);
    //    // if (res.data) {
    //     // if (!(typeof res === "undefined")) { // 15
    //     //   openInfoTooltipPopup(true);
    //       history.push("/movies");
    //     // } else {
    //     //   openInfoTooltipPopup(false);
    //     // }
    //   })
    //   .catch((err) => {
    //     console.log("Ошибка регистрации ", err);
    //     // openInfoTooltipPopup(false);
    //   });
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChangeName}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">E-mail</p>
      <input
        name="email"
        placeholder="email"
        type="text"
        className="register__input"
        value={email}
        onChange={handleChangeEmail}
      />
      {/* <span class="register__error">Что-то пошло не так ...</span> */}
      <p className="register__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        className="register__input"
        value={password}
        onChange={handleChangePassword}
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
    </form>
  );
}
