import React from "react";
import "./aboutProject.css";

export default function AboutProject(props) {
  return (
    <div className="aboutProject">
      <h2 className="aboutProject__heading">О проекте</h2>
      <div className="aboutProject__blocks-title">
        <div className="aboutProject__block-title">
          <h3 className="aboutProject__block-title-heading">
              Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__block-title-title">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__block-title">
          <h3 className="aboutProject__block-title-heading">
              На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__block-title-title">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
    </div>
  );
}
