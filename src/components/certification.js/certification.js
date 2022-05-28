import React from "react";

export default function Certification() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2 className="fs-2 mb-3 text-primary">Certifications</h2>
            <ul className="mb-5">
              <li className="mb-2">
                I've completed my web development training on &nbsp;
                <strong>
                  <a
                    href="https://trainings.internshala.com/verify-certificate/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-success"
                  >
                    internshala
                  </a>
                </strong>{" "}
                &nbsp; platform
              </li>
              <li className="mb-2">
                Completed a course on SQL and Relational Database on &nbsp;
                <strong>
                  <a
                    href="https://courses.cognitiveclass.ai/certificates/aa7728dcaebc4ccf8bdfe28568943592"
                    className="text-success"
                    target="_blank"
                    rel="noreferrer"
                  >
                    cognitive classes
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
