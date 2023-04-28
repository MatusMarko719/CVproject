import React, { useState, useRef } from "react";
import "../UI/bootstrap.css";
import "../UI/main.css";
import "./Header.css";

const Header = (props) => {
  const [clicked, setClicked] = useState(true);

  const buttonClickHandler = () => {
    setClicked((clicked) => !clicked);
  };
  const scrollAbout = () => {
    props.onScrollAbout();
    setClicked(true);
  };
  const scrollSkills = () => {
    props.onScrollSkills();
    setClicked(true);
  };
  const scrollWorkexp = () => {
    props.onScrollWorkexp();
    setClicked(true);
  };
  const scrollContacts = () => {
    props.onScrollContacts();
    setClicked(true);
  };
  const scrollEducation = () => {
    props.onScrollEducation();
    setClicked(true);
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
              Matúš Marko - životopis
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
              <ul className="navbar-nav ms-auto me-2">
                <li className="nav-item">
                  <a className="nav-link" href="#about" onClick={scrollAbout}>
                    O mne
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills" onClick={scrollSkills}>
                    Zručnosti
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#workexp"
                    onClick={scrollWorkexp}
                  >
                    Pracovné skúsenosti
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#education"
                    onClick={scrollEducation}
                  >
                    Vzdelanie
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={scrollContacts}
                  >
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
