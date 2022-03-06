import React from 'react';
import "./searchForm.css";
import searchFormIcon from "../../../images/iconSearchform.svg"

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function SearchForm (props) {
   function searchFormIconElement(){
       if (props.size.clientWidth > 500){
           return (<img className="searchForm__icon" 
                        src={searchFormIcon} 
                        alt="иконка поиска"
                    />);
       }
   }  

    return (
            <div className="searchForm">
                {searchFormIconElement()}
                <p className='searchForm__title'>Фильм</p>
                <div className='searchForm__button'>Найти</div>
            </div>
    );
}