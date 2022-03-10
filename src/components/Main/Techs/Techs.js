import React from "react";
import "./techs.css";

export default function Techs(props) {
  return (
    <ul className="techs" id="techs">
      <h2 className="techs__heading">Технологии</h2>
      <li className="techs__blocks-title">
        {/* <div className="techs__block-title"> */}
        <h3 className="techs__block-title-heading">7 технологий</h3>
        <p className="techs__block-title-title">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        {/* </div> */}
      </li>
      <li className="techs__block">
        <div className="techs__tech">
          <p className="techs__tech-title">HTML</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">CSS</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">JS</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">React</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">Git</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">Express.js</p>
        </div>
        <div className="techs__tech">
          <p className="techs__tech-title">mongoDB</p>
        </div>
      </li>
    </ul>
  );
}
