import React from "react";
import "./aboutMe.css";
import { NavLink } from "react-router-dom";
import fotoMe from "../../../images/aboutMe.png";

export default function AboutMe(props) {
  return (
    <ul className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__heading">Студент</h2>
      <li className="aboutMe__blocks-title">
        <div className="aboutMe__block-title">
          <h3 className="aboutMe__block-title-heading">Виталий</h3>
          <p className="aboutMe__block-title-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="aboutMe__block-title-title">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="aboutMe__blocks-title-link">
            <a
              className="aboutMe__block-title-link"
              href="https://www.facebook.com/"
              target="_blank"
            >
              Facebook
            </a>
            <a
              className="aboutMe__block-title-link"
              href="https://www.github.com/"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>

        <img
          className="aboutMe__block-title-image"
          src={fotoMe}
          alt="фото студента"
        />
      </li>
    </ul>
  );
}
