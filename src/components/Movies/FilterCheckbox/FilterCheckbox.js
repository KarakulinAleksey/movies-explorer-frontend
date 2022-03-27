import React from "react";
import "./filter-checkbox.css";
import filterCheckboxImageOn from "../../../images/smalltumb.svg";
import filterCheckboxImageOff from "../../../images/smalltumboff.svg";

export default function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <img
        className="filter-checkbox__button"
        onClick={props.onFilter}
        src={props.isShortMovie?filterCheckboxImageOn:filterCheckboxImageOff}
        alt="кнопка короткометражек"
      />
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}
