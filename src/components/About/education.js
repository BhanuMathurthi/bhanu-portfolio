import React from "react";

export default function Education() {
  return (
    <>
      <section>
        <div className="container mt-4">
          <h2 style={{ color: "#042D41" }} className="mb-4 fw-bold">
            Education
          </h2>
          <div className="">
            <table className="table table-responsive">
              <thead
                className="fw-bold"
                style={{ backgroundColor: "#042D41", color: "white" }}
              >
                <tr>
                  <th scope="col">Year Of Passing</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Name Of The Institute</th>
                  <th scope="col">Percentage/CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2019</th>
                  <td>Bachelor of Technology, JNTUK</td>
                  <td>Dadi institute of engineering and technology</td>
                  <td>68.03%</td>
                </tr>
                <tr>
                  <th scope="row">2016</th>
                  <td> Diploma, APSBTET</td>
                  <td>Dadi institute of engineering and technology</td>
                  <td>83.31%</td>
                </tr>
                <tr>
                  <th scope="row">2013</th>
                  <td>SSC, Board of Secondary Education</td>
                  <td>Zilla parishad high school</td>
                  <td>7.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
