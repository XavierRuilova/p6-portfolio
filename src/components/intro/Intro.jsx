import React from "react";
import "./intro.css";
import SvgGithub from "../svgIcons/SvgGithub";
import SvgLinkedin from "../svgIcons/SvgLinkedin";

const Intro = () => {
  return (
    <section id="cover" className="cover">
      <div className="content-section">
        <div className="info">
          <h1 id="aboutme">XAVIER RUILOVA</h1>
          <h2>Desarrollador full stack | Profesor de idiomas | Traductor </h2>
          <div className="profiles">
            <a target="_blank" href="https://github.com/XavierRuilova"><SvgGithub/></a>
            <a target="_blank" href="https://www.linkedin.com/in/xavier-ruilova-accini-6a1630227/"><SvgLinkedin/></a>
          </div>
        </div>
        <div className="photo">
          <img src="https://i.ibb.co/2WqF9R2/20160224.jpg" alt="profile photo" className="src alt"/>
        </div>
      </div>
    </section>
  );
};

export default Intro;
