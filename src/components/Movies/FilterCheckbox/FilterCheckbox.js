import React from "react";
import "./filterCheckbox.css";
import filterCheckboxImage from "../../../images/smalltumb.png";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function FilterCheckbox(props) {
  return (
    <div className="filterCheckbox">
      <img
        className="filterCheckbox__button"
        src={filterCheckboxImage}
        alt="кнопка короткометражек"
      />
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}
