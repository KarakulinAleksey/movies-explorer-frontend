import React from "react";
import "./about-me.css";
import fotoMe from "../../../images/aboutMe.jpg";

export default function AboutMe(props) {
  return (
    <ul className="about-me" id="aboutMe">
      <h2 className="about-me__heading">Студент</h2>
      <li className="about-me__blocks-title">
        <div className="about-me__block-title">
          <h3 className="about-me__block-title-heading">Алексей</h3>
          <p className="about-me__block-title-subtitle">
            Фронтенд-разработчик, 40 лет
          </p>
          <p className="about-me__block-title-title">
            После окончания университета устроился на работу в энергетику.
            Работаю инженером и разрабатываю системы управления технологическими процессами.
            Год назад заинтересовался Web-разработкой.
            Закончил курс "Web-разработка" Я.Практикум. Очень понравилось.
            Хочу получить практические навыки и еще сильнее углубиться в Web-разработку.
          </p>
          <div className="about-me__blocks-title-link">
            {/* <a
              className="about-me__block-title-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a> */}
            <a
              className="about-me__block-title-link"
              href="https://github.com/KarakulinAleksey"
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
