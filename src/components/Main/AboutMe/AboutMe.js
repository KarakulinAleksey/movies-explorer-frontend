import React from "react";
import "./about-me.css";
import fotoMe from "../../../images/aboutMe.png";

export default function AboutMe(props) {
  return (
    <ul className="about-me" id="aboutMe">
      <h2 className="about-me__heading">Студент</h2>
      <li className="about-me__blocks-title">
        <div className="about-me__block-title">
          <h3 className="about-me__block-title-heading">Виталий</h3>
          <p className="about-me__block-title-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__block-title-title">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__blocks-title-link">
            <a
              className="about-me__block-title-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="about-me__block-title-link"
              href="https://www.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <img
          className="about-me__block-title-image"
          src={fotoMe}
          alt="фото студента"
        />
      </li>
    </ul>
  );
}
