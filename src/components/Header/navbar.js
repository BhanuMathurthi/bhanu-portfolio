import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <header id="title">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg py-2 fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              Bhanu
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                <li className="nav-item my-1">
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a
                    href="https://www.linkedin.com/in/-saibhanu-mathurthi/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fs-3 text-white mx-2 nav-link"
                      icon={faLinkedin}
                      // size="2x"
                    />
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a href="https://github.com/BhanuMathurthi" target="_blank">
                    <FontAwesomeIcon
                      className="fs-3 text-white mx-2 nav-link"
                      icon={faGithub}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
