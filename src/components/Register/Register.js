import React from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import { NavLink, Link} from "react-router-dom";


export default function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);

  function handleChangeName(e){
    // const validName = /^[a-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError("Длина имени должна быть не менее 2 символов");
    } else if (e.target.value.length > 30) {
      setNameError("Длина имени должна должна быть не более 30 символов");
    // } else if (!validName) {
    //   setNameError("Имя должно быть указано латиницей");
    } else {
      setNameError("");
    }
    setName(e.target.value);
  }

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
    props.onRegister(name, email, password);
  
  }

  React.useEffect(() => {
    if (
      name &&
      email &&
      password &&
      !nameError &&
      !emailError &&
      !passwordError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, email, password, nameError, emailError, passwordError]);

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
        className={`register__input ${nameError ? "register__input-error" : "register__input_green"}`}
        autoComplete="on"
        value={name}
        onChange={handleChangeName}
        required
      />
      <span className="register__error">{nameError}</span>

      <p className="register__input-title">E-mail</p>
      <input
        name="email"
        placeholder="email"
        type="text"
        className={`register__input ${emailError ? "register__input-error" : ''}`}
        value={email}
        autoComplete="on"
        onChange={handleChangeEmail}
        required
      />
      <span className="register__error">{emailError}</span>

      <p className="register__input-title">Пароль</p>
      <input
        name="password"
        placeholder="password"
        type="text"
        className={`register__input ${passwordError ? "register__input-error" : ""}`}
        value={password}
        autoComplete="on"
        onChange={handleChangePassword}
        required
      />
      <span className="register__error">{passwordError}</span>
      {/* </div> */}

      <button
       type="submit"
       disabled={!formValid}
       className={`register__button ${
        !formValid ? "register__button-disabled" : ""
      }`}>
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
