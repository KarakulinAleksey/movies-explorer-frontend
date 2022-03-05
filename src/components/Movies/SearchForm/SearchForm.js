import React from 'react';
import "./searchForm.css";
import searchFormIcon from "../../../images/iconSearchform.svg"

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function FilterCheckbox (props) {
   

    return (
            <div className="searchForm">
                <img className="searchForm__icon" src={searchFormIcon} alt="иконка поиска"/>
                <p className='searchForm__title'>Фильм</p>
                <div className='searchForm__button'>Найти</div>
            </div>
    );
}