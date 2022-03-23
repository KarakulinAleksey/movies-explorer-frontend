import React from "react";
import "./profile.css";
import Header from "../Header/Header";
import { СurrentUserContext } from "../../context/CurrentUserContext";

export default function Profile(/*{setOnLogin}*/ props) {
  const currentUser = React.useContext(СurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  console.log(currentUser);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditUser(name, email);
  }

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
          placeholder="Имя"
          type="text"
          className="profile__input"
          onChange={handleChangeName}
          value={name}
        />
        {/* <span class="name-input-error"></span> */}
        <div className="borderLine"></div>
        <input
          name="email"
          placeholder="email"
          type="text"
          className="profile__input"
          onChange={handleChangeEmail}
          value={email}
        />
        {/* <span class="email-input-error"></span> */}
        {/* </div> */}
        <button type="submit" className="profile__button-edit">
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button-output"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </>
  );
}
