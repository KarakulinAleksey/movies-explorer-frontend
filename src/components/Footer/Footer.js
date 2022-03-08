import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer">
      <h2 className="footer__heading footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <p className="footer__title footer__text">&copy; 2022</p>

      <NavLink className="footer__link footer__text" to="/sign-in">
        Яндекс.Практикум
      </NavLink>
      <NavLink className="footer__link footer__text" to="/sign-in">
        Github
      </NavLink>
      <NavLink className="footer__link footer__text" to="/sign-in">
        Facebook
      </NavLink>
    </div>
  );
}
