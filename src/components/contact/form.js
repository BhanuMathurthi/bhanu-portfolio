import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import InputField from "./inputfield";
import TextAreaField from "./textarea";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send("service_lhyeuqd", "template_k92gu72", values, "uK8DxOBh25g0DVjGr")
      .then(
        (response) => {
          console.log("SUCCESS!", response.text);
          setValues({
            fullname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    alert("Email Sent!");
  }

  return (
    <section id="contact">
      <h2 className="fs-2 text-center mb-5 text-primary">
        <strong>Contact Me</strong>
      </h2>
      <div className="container">
        <div className="row mb-5 d-flex align-items-center justify-content-center">
          <div
            className="col-10 col-md-6 col-lg-6"
            style={{ width: "500px", height: "500px" }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                border: "0",
                frameborder: "0",
              }}
              title="map"
              className="absolute inset-0"
              src="https://www.google.com/maps/embed/v1/place?q=anakapalli,+visakhapatnam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <div className="col-10 col-md-6 col-lg-6 ">
            <form
              onSubmit={handleSubmit}
              ref={form}
              className="p-4 bg-light shadow p-3 my-5 rounded"
              autoComplete="off"
            >
              <h3 className="text-center text-dark fs-3 my-3">
                Send me a Message
              </h3>
              <div className="form-group mb-2 text-dark">
                <InputField
                  handleChange={handleChange}
                  label="Full Name"
                  name="fullname"
                  type="text"
                  value={values.fullname}
                />
                <InputField
                  handleChange={handleChange}
                  label="E-Mail"
                  name="email"
                  type="email"
                  value={values.email}
                />
                <TextAreaField
                  handleChange={handleChange}
                  label="Your message here"
                  name="message"
                  value={values.message}
                />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success button">
                    Send{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "13px" }}
                      className="text-center mx-2"
                      icon={faChevronRight}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
