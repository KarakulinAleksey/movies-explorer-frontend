import React from 'react';
import "./moviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function MoviesCardList (props) {
   

    return (
            <div className="moviesCardList"> 
                <div className='moviesCardList__list'>
                   <MoviesCard/> 
                </div>               
                <div className='moviesCardList__button'>Ещё</div>
            </div>
    );
}