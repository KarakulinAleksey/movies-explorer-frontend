import React from "react";
import { NavLink } from "react-router-dom";
import "./navtab.css";
import {HashLink as Link} from "react-router-hash-link";

export default function NavTab(props) {
  return (
    <nav className="navtab">
      <Link className="navtab__link" to='/#aboutProject'>
        О проекте
      </Link>
      <Link className="navtab__link" to="/#techs">
        Технологии
      </Link>
      <Link className="navtab__link" to="/#aboutMe">
        Студент
      </Link>
    </nav>
  );
}
