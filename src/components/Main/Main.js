import React from 'react';
import "./main.css";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Header (props) {
   

    return (
            <main className="main">
                   <Promo />
                   <NavTab />
                   <AboutProject />
            </main>
    );
}