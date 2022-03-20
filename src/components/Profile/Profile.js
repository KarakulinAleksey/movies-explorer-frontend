import React from "react";
import "./profile.css";
import * as auth from "../../utils/auth";
import {mainApi} from "../../utils/MainApi";
import { NavLink, useHistory} from "react-router-dom";
import {СurrentUserContext} from "../../context/CurrentUserContext";

export default function Profile({setOnLogin}) {
  const currentUser = React.useContext(СurrentUserContext);
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  console.log(currentUser);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onSignout(){
    auth
     .signout()
      .then((res) => {
        console.log(res);
        setOnLogin(false);
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('searchMovies');
        history.push("/");
    })
    .catch((err) => {
      console.log("Ошибка выхода ", err);
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    mainApi
    .updateProfileUser(name, email)
     .then((res) => {
       console.log(res);
      //  history.push("/");
   })
   .catch((err) => {
     console.log("Ошибка обновления данных пользователя ", err);
   });
 }

  

  return (
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
      <button type="button" className="profile__button-output" onClick={onSignout}>
        Выйти из аккаунта
      </button>
    </form>
  );
}
