import React from "react";
import "./login.css";
import logo from "../../images/logo.svg";

import { NavLink, Link} from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);

  function handleChangeEmail(e){
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value
    );

    if (!validEmail) {
      setEmailError("Неверный формат почты");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  }

  function handleChangePassword(e){
    if (e.target.value.length < 8) {
      setPasswordError("Пароль должен быть не менее 8 символов");
    } else {
      setPasswordError("");
    }
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.onLogin(email, password); 
  }

  React.useEffect(() => {
    if (props.loggedIn) {
      setEmail("");
      setPassword("");
    }
  }, [props.loggedIn]);

  React.useEffect(() => {
    if (email && password && !emailError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password, emailError, passwordError]);

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
        type="email"
        className={`login__input  ${
          emailError ? "login__input-error" : "login__input_green"
        }`}
        value={email}
        onChange={handleChangeEmail}
        required
      />
      <span className="login__error">{emailError}</span>
      <p className="login__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="password"
        className={`login__input 
        ${passwordError ? "login__input-error" : "login__input_green"}`}
        value={password}
        onChange={handleChangePassword}
        required
      />
      <span className="login__error">{passwordError}</span>
      {/* </div> */}
      <div className="form__item-error form__item-response">
            {props.message}
          </div>
      <button
       type="submit"
       className={`login__button ${
        !formValid ? "login__button_disabled" : ""
      }`}
       disabled={!formValid}
       >
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
