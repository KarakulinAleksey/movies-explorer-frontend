import React from "react";
import "./portfolio.css";
import linkImage from "../../../images/link-image.svg";
import { NavLink } from "react-router-dom";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>

      <a
        className="portfolio__link"
        href="https://github.com/KarakulinAleksey/yet-another-project"
        target="_blank"
      >
        <p className="portfolio__link-title">Статичный сайт</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/KarakulinAleksey/mesto"
        target="_blank"
      >
        <p className="portfolio__link-title">Адаптивный сайт</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/KarakulinAleksey/movies-explorer-frontend"
        target="_blank"
      >
        <p className="portfolio__link-title">Одностраничное приложение</p>
        <img className="portfolio__image" src={linkImage} alt="ссылка" />
      </a>
    </div>
  );
}
