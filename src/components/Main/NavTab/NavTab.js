import React from 'react';
import { NavLink } from "react-router-dom";
import "./navtab.css";

export default function NavTab (props) {
   

    return (
            <div className="navtab">
                <NavLink className="navtab__link" to="/movies">О проекте</NavLink> {/* // поправить ссылки  */}
                <NavLink className="navtab__link" to="/movies">Технологии</NavLink>
                <NavLink className="navtab__link" to="/movies">Студент</NavLink>
                                  
            </div>
    );
}