import React from "react";
import "./filterCheckbox.css";
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
    <div className="filterCheckbox">
      <img
        className="filterCheckbox__button"
        onClick={hendelFilterCheckboxImage}
        src={isfilterCheckboxImage}
        alt="кнопка короткометражек"
      />
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}
