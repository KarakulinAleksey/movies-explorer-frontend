import React from "react";
import "./filter-checkbox.css";
import filterCheckboxImageOn from "../../../images/smalltumb.svg";
import filterCheckboxImageOff from "../../../images/smalltumboff.svg";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function FilterCheckbox(props) {
  const [isfilterCheckboxImage, setfilterCheckboxImage] = React.useState(
    filterCheckboxImageOff
  );

  function hendelFilterCheckboxImage() {
    if (isfilterCheckboxImage === filterCheckboxImageOn) {
      setfilterCheckboxImage(filterCheckboxImageOff) ;
    } else if (isfilterCheckboxImage === filterCheckboxImageOff) {
      setfilterCheckboxImage(filterCheckboxImageOn) ;
    }
  }

  return (
    <div className="filter-checkbox">
      <img
        className="filter-checkbox__button"
        onClick={hendelFilterCheckboxImage}
        src={isfilterCheckboxImage}
        alt="кнопка короткометражек"
      />
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}
