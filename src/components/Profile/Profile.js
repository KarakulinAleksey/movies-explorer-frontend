import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import Header from "../Header/Header";
import { СurrentUserContext } from "../../context/CurrentUserContext";

export default function Profile(props) {
  const currentUser = React.useContext(СurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [changedName, setChangedName] = React.useState(false);
  const [changedEmail, setChangedEmail] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [isInputDisabled, setIsInputDisabled] = React.useState(true);
  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleChangeName(e) {
    setChangedName(true);
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

  function handleChangeEmail(e) {
    setChangedEmail(true);
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

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditUser(name, email);
    changeInputDisabled();
  }

  function changeInputDisabled() {
    setIsInputDisabled(!isInputDisabled);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  React.useEffect(() => {
    if (currentUser.name === name && currentUser.email === email) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [name, email, currentUser.name, currentUser.email]);

  return (
    <>
      <Header
        size={props.size}
        handlerNavigationOpen={props.handlerNavigationOpen}
      />
      <form onSubmit={handleSubmit} className="profile">
        <p className="profile__title">Привет, {currentUser.name}!</p>
        {/* <div class="profile__container-input"> */}
        <input
          name="name"
          placeholder="name"
          type="text"
          className={`profile__input ${
            changedName && nameError ? "profile__input_error" : ""
          }`}
          onChange={handleChangeName}
          value={name}
          disabled={!isInputDisabled}
        />
        <span className="profile__input-error"> {nameError}</span>
        <div className="borderLine"></div>
        <input
          name="email"
          placeholder="email"
          type="text"
          className={`profile__input ${
            changedEmail && emailError
              ? "profile__input_error"
              : ""
          }`}
          onChange={handleChangeEmail}
          value={email}
          disabled={!isInputDisabled}
        />
        <span className="profile__input-error">{emailError}</span>
        {/* </div> */}
        <button
         type="submit"
         className="profile__button-edit"
         disabled={!formValid || nameError || emailError}
         onClick={changeInputDisabled}>
          Редактировать
        </button>
        <div className="profile__item-message">{props.message}</div>
        <Link
          to="/" //level-3
          className="profile__button-output"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </Link>
      </form>
    </>
  );
}
