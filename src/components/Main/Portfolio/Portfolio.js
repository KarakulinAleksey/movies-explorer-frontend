import React from "react";
import "./portfolio.css";
import linkImage from "../../../images/link-image.svg";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>

      <a
        className="portfolio__link"
        href="https://karakulinaleksey.github.io/yet-another-project/index.html"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-title">Адаптивный сайт</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a>
      <a
        className="portfolio__link"
        href="https://karakulinaleksey.github.io/mesto/index.html"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-title">Одностраничное приложение</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a>
      {/* <a
        className="portfolio__link"
        href="https://mov-exp.karakulin.nomoredomains.work/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-title">Многостраничное приложение</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a> */}
    </div>
  );
}
