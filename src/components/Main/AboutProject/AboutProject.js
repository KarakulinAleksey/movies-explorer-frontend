import React from "react";
import "./aboutProject.css";

export default function AboutProject(props) {
  return (
    <ul className="aboutProject">
      <h2 className="aboutProject__heading">О проекте</h2>
      <li className="aboutProject__blocks-title">
        <div className="aboutProject__block-title">
          <h3 className="aboutProject__block-title-heading">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="aboutProject__block-title-title">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__block-title">
          <h3 className="aboutProject__block-title-heading">
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="aboutProject__block-title-title">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </li>
      <li className="aboutProject__timeLine">
        <div className="aboutProject__timeLine-backend">
          <p className="aboutProject__timeLine-title">1 неделя</p>
        </div>
        <div className="aboutProject__timeLine-frontend">
          <p className="aboutProject__timeLine-title">4 недели</p>
        </div>
      </li>
      <li className="aboutProject__timeLine editMargin">
        <div className="aboutProject__timeLine-backend whiteBackground">
          <p className="aboutProject__timeLine-title">Back-end</p>
        </div>
        <div className="aboutProject__timeLine-frontend whiteBackground">
          <p className="aboutProject__timeLine-title">Front-end</p>
        </div>
      </li>
    </ul>
  );
}
