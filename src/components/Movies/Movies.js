import React from 'react';
import "./movies.css";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
// import AboutProject from "./AboutProject/AboutProject";
// import Techs from "./Techs/Techs";
// import AboutMe from "./AboutMe/AboutMe";
// import Portfolio from './Portfolio/Portfolio';

// import { NavLink, useHistory, useLocation } from "react-router-dom";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Movies (props) {
   

    return (
            <main className="movies">
                   <SearchForm />
                   <FilterCheckbox/>
                   {/* <AboutProject /> */}
                   {/* <Techs /> */}
                   {/* <AboutMe /> */}
                   {/* <Portfolio /> */}
            </main>
    );
}