import React from "react";
import "./footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <h2 className="footer__heading footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <p className="footer__title footer__text">&copy; 2022</p>

      <a
        className="footer__link footer__text"
        href="https://practicum.yandex.ru"
        rel="noreferrer"
        target="_blank"
      >
        Яндекс.Практикум
      </a>
      <a
        className="footer__link footer__text"
        href="https://github.com/KarakulinAleksey"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      {/* <a
        className="footer__link footer__text"
        href="https://www.facebook.com/"
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a> */}
    </div>
  );
}
