import React from "react";
import "./aboutMe.css";
import { NavLink } from "react-router-dom";
import fotoMe from "../../../images/aboutMe.png";

export default function AboutMe(props) {
  return (
    <ul className="aboutMe">
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
            <NavLink className="aboutMe__block-title-link" to="/sign-in">Facebook</NavLink>
            <NavLink className="aboutMe__block-title-link" to="/sign-in">Github</NavLink>
          </div>         
        </div>
        	
        <img  className="aboutMe__block-title-image" src={fotoMe} alt="фото студента"/>
      </li>
      {/* <li className="aboutMe__portfolio">
        <div className="aboutMe__portfolio-backend">
          <p className="aboutMe__portfolio-title">1 неделя</p>
        </div>
        <div className="aboutMe__portfolio-frontend">
          <p className="aboutMe__portfolio-title">4 недели</p>
        </div>
      </li>
      <li className="aboutMe__portfolio editMargin">
        <div className="aboutMe__portfolio-backend whiteBackground">
          <p className="aboutMe__portfolio-title">Back-end</p>
        </div>
        <div className="aboutMe__portfolio-frontend whiteBackground">
          <p className="aboutMe__portfolio-title">Front-end</p>
        </div>
      </li> */}
    </ul>
  );
}
