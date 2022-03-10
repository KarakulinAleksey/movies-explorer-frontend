import React from "react";
import "./profile.css";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Profile(props) {
  let userName = "Виталий";
  function onChange(){

  }

  return (
    <main className="profile">
      <p className="profile__title">Привет, {userName}!</p>
      {/* <div class="profile__container-input"> */}
      <input name="name" placeholder="Имя" type="text" className="profile__input" />
      {/* <span class="name-input-error"></span> */}
      <div className="borderLine"></div>
      <input
        name="email"
        placeholder="email"
        type="text"
        className="profile__input"
        onChange={onChange}
      />
      {/* <span class="email-input-error"></span> */}
      {/* </div> */}
      <button type="submit" className="profile__button-edit">
        Редактировать
      </button>
      <button type="submit" className="profile__button-output">
        Выйти из аккаунта
      </button>
    </main>
  );
}
