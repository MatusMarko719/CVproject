import React, { useState, useRef } from "react";
import "../UI/bootstrap.css";
import "../UI/main.css";

const Header = (props) => {
  const [clicked, setClicked] = useState(true);

  const buttonClickHandler = () => {
    setClicked((clicked) => !clicked);
  };

  const blurHandler = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <>
      <header className="bg-light">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          id="header-nav"
          role="navigation"
        >
          <div className="container">
            <a className="link-dark navbar-brand site-title mb-0" href="#">
              Matúš Marko
            </a>
            <button
              onClick={buttonClickHandler}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                !clicked ? "navbar-collapse" : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-2" >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#about"
                    onClick={props.onScrollAbout}
                  >
                    O mne
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills" onClick={props.onScrollSkills}>
                    Zručnosti
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#workexp" onClick={props.onScrollWorkexp}>
                    Pracovné skúsenosti
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Vzdelanie
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Záujmy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
