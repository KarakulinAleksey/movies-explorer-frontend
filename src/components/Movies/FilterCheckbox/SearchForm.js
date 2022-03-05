import React from 'react';
import "./searchForm.css";
import searchFormIcon from "../../../images/iconSearchform.svg"

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function FilterCheckbox (props) {
   

    return (
            <div className="searchForm">
                <img className="searchFormIcon" src={searchFormIcon} alt="иконка поиска"/>
                <p className='searchFormTitle'>Фильм</p>
                <div className='searchFormButton'>Найти</div>
            </div>
    );
}