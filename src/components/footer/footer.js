import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="p-3 bg-dark text-light position-relative">
        <p className="fs-6 text-center mb-5">&copy; All rights reserved - 2022</p>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <h2 className="fs-5 mb-3 text-primary">Contact</h2>
              <p>
                <FontAwesomeIcon
                  style={{ fontSize: "13px" }}
                  className="text-center mx-2 fs-6"
                  icon={faPhone}
                />
                <a
                  className="text-decoration-none text-light"
                  href="tel:+918074715667"
                >
                  +91 8074715667
                </a>
              </p>
              <p>
                <FontAwesomeIcon
                  style={{ fontSize: "13px" }}
                  className="text-center mx-2 fs-6"
                  icon={faEnvelope}
                />
                <a
                  className="text-light text-decoration-none"
                  href="mailto:saibhanu301@gmail.com"
                >
                  saibhanu301@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="fs-5 mb-3 text-primary">Address:</h2>
              <p>Visakhapatnam, 531002</p>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
          <div className="col-md-2">
            <a
              href="#"
              className="position-absolute bottom-0 end-0 p-5 text-white"
            >
              <FontAwesomeIcon
                style={{ fontSize: "21px" }}
                className="text-light"
                icon={faArrowUp}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
