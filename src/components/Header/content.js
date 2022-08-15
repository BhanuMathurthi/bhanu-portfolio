import React from "react";
import HeroImg from "../images/headerImg.png";
import DownloadResume from "./saibhanuresume.pdf";

export default function Headercontent() {
  return (
    <>
      {/* <section
        id="Header"
        className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div className="container intro">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="display-5 fw-bold">
                Hi, I'm <span className="text-warning">Sai Bhanu</span>
              </h1>
              <h2 className="fs-4 lh-1 mb-3">I love to build amazing apps</h2>
              <p className="lead my-4">
                I'm very ambitious self taught developer looking for a role in
                frontend development in a growing IT organisation with the
                opportunity to work with the latest technologies on challenging
                and diverse projects
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href="#contact"
                  className="contactbutton btn btn-primary btn-lg px-4 me-md-2"
                  role="button"
                >
                  Contact Me
                </a>
                <a
                  href={DownloadResume}
                  className="btn btn-outline-secondary btn-lg px-4 me-md-2"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
            <img
              src={HeroImg}
              className="img-fluid w-50 d-none d-sm-block"
              loading="lazy"
              alt="HeaderImage"
            />
          </div>
        </div>
      </section> */}

      <section
        id="Header"
        style={{
          marginTop: "1rem",
          backgroundColor: "#042D41",
          borderRadius: "0px 0px 50px 50px",
        }}
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div style={{ paddingBottom: "3rem" }} className="container intro">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="display-5 fw-bold">
                Hi, I'm <span className="text-warning">Sai Bhanu</span>
              </h1>
              <h2 className="fs-4 lh-1 mb-3">I love to build amazing apps</h2>
              <p style={{ fontSize: "16px" }} className="my-4">
                I'm very ambitious self taught developer looking for a role in
                frontend development in a growing IT organisation with the
                opportunity to work with the latest technologies on challenging
                and diverse projects
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href="#contact"
                  className="contactbutton btn btn-primary btn-lg px-4 me-md-2"
                  role="button"
                  style={{ fontSize: "16px" }}
                >
                  Contact Me
                </a>
                <a
                  href={DownloadResume}
                  style={{ fontSize: "16px" }}
                  className="btn btn-outline-secondary btn-lg px-4 me-md-2"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>

            <img
              src={HeroImg}
              className="header-bannerimage img-fluid w-50 d-sm-block"
              loading="lazy"
              alt="HeaderImage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
