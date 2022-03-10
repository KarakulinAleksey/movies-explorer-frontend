import React from "react";
import "./about-project.css";


export default function AboutProject(props) {


  return ( 
    <ul className="about-project" id="aboutProject">
      <h2 className="about-project__heading">О проекте</h2>
      <li className="about-project__blocks-title">
        <div className="about-project__block-title">
          <h3 className="about-project__block-title-heading">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__block-title-title">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__block-title">
          <h3 className="about-project__block-title-heading">
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__block-title-title">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </li>
      <li className="about-project__timeline">
        <div className="about-project__timeline-backend">
          <p className="about-project__timeline-title">1 неделя</p>
        </div>
        <div className="about-project__timeline-frontend">
          <p className="about-project__timeline-title">4 недели</p>
        </div>
      </li>
      <li className="about-project__timeline edit-margin">
        <div className="about-project__timeline-backend white-background">
          <p className="about-project__timeline-title">Back-end</p>
        </div>
        <div className="about-project__timeline-frontend white-background">
          <p className="about-project__timeline-title">Front-end</p>
        </div>
      </li>
    </ul>
  );
}
