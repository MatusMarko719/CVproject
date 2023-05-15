import React, { useState } from "react";
import classes from "./Skills.module.css";
import "../UI/bootstrap.css";
import webrebel from "../foto/webrebel.jpg";
import zaklady from "../foto/zaklady.jpg";
import Java from "../foto/JavaScript.jpg";
import css from "../foto/CSS.jpg";

const Skills = () => {
  const [clicked, setClicked] = useState(true);
  const certificatesHandler = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <div>
      <h4>Zručnosti</h4>
      <p className={classes.articel}>
        Ponúkam malý prehľad toho, čo som sa zatiaľ naučil... Je ťažké stanoviť,
        kde je tá hranica kedy človek môže povedať, že už niečo naozaj ovláda. A
        keďže platí, že čím viac viem, tým viac vidím čo všetko ešte neviem,
        nižšie ukážem, že niečo predsa len robiť viem ;{")"}
      </p>
      <div className={classes.bars}>
        <div className={classes.skill}>
          <label htmlFor="" className={classes.label}>
            <span className={classes.head1}>HTML</span>{" "}
            <span className={classes.head2}>70%</span>{" "}
          </label>
          <div id={classes.bar} className="progress">
            <div
              id={classes.insideHtmlBar}
              className="progress-bar"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay="100"
              data-aos-anchor=".skills-section"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className={classes.skill}>
          <label htmlFor="" className={classes.label}>
            <span className={classes.head1}>REACT</span>{" "}
            <span className={classes.head2}>50%</span>{" "}
          </label>
          <div id={classes.bar} className="progress">
            <div
              id={classes.insideReactBar}
              className="progress-bar"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay="100"
              data-aos-anchor=".skills-section"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className={classes.skill}>
          <label htmlFor="" className={classes.label}>
            <span className={classes.head1}>CSS 3 </span>{" "}
            <span className={classes.head2}>65%</span>{" "}
          </label>
          <div id={classes.bar} className="progress">
            <div
              id={classes.insideCssBar}
              className="progress-bar"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay="100"
              data-aos-anchor=".skills-section"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className={classes.skill}>
          <label htmlFor="" className={classes.label}>
            <span className={classes.head1}>JavaScript </span>{" "}
            <span className={classes.head2}>45%</span>{" "}
          </label>
          <div id={classes.bar} className="progress">
            <div
              id={classes.insideJSBar}
              className="progress-bar"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay="100"
              data-aos-anchor=".skills-section"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className={classes.allCourses}>
        <div className={classes.courses}>
          <p className={classes.podarilo}>Podarilo sa mi Vyrobiť:</p>
          <p>
            Webová stránka pre Občianské združenie pracujúce s deťmi s autizmom:
          </p>
          <p>
            Link {">"}
            {">"}{" "}
            <a href="https://ozcharbel.sk/" target="blank">
              <span className={classes.bold}>ozcharbel.sk</span>
            </a>
          </p>
          <p>Použité technológie: HTML, CSS, Jquery, Bootstrap</p>

          
        </div>
        <div className={classes.courses}>
          <p id={classes.abs}>Absolvované kurzy:</p>
          <ul>
            <li>
              <a
                href="https://skillmea.sk/online-kurzy/zaklady-programovania-a-oop"
                target="blank"
              >
                Skillmea - Základy programovania a OOP
              </a>
            </li>
            <li>
              <a
                href="https://skillmea.sk/online-kurzy/webrebel-1-html-css-javascript"
                target="blank"
              >
                Skillmea - Webrebel: HTML, CSS & JavaScript
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/"
                target="blank"
              >
                Udemy - CSS The Complete Guide
              </a>{" "}
            </li>
            <li>
              <a
                href="https://skillmea.sk/online-kurzy/online-kurz-javascript-es6"
                target="blank"
              >
                {" "}
                Skillmea - JavaScript a ES6
              </a>
            </li>
          </ul>
          <p onClick={certificatesHandler} id={classes.openerCertificates}>
            {clicked ? "pozrieť certifikáty >>" : "zavrieť certifikáty <<"}
          </p>
        </div>
        {!clicked && (
          <div id={classes.certificatesContainer}>
            <img src={webrebel} alt="" className={classes.certificatesImages} />
            <img src={zaklady} alt="" className={classes.certificatesImages} />
            <img src={Java} alt="" className={classes.certificatesImages} />
            <img src={css} alt="" className={classes.certificatesImages}/>
          </div>
        )}
        <div className={classes.courses}>
          <p id={classes.work}>Kurzy na ktorých aktuálne pracujem:</p>
          <ul>
            <li>
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=react&src=sac">
                Udemy - REACT The Complete Guide (incl Hooks, React Router,
                Redux)
              </a>
            </li>
            <li>
              <a href="https://skillmea.sk/online-kurzy/sql-databazy-mysql-sqlite">
                Skillmea - SQL databázy: MySQL a SQLite
              </a>{" "}
            </li>
            <li>
              <a href="https://skillmea.sk/online-kurzy/git-a-github">
                Skillmea - Git a GitHub základy
              </a>{" "}
            </li>
          </ul>
        </div>
       
        <div className={classes.courses}>
          <p id={classes.plan}>Iné skúsesnoti zručnosti:</p>
          <ul>
            <li>Anglický jazyk (pokročilý – B2)</li>
            <li>Vodičský preukaz: skupina B (aktívny vodič)</li>
            <li>
             Slovenský skauting
              - vedúci menšej skupiny ľudí
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
