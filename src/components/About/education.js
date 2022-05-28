import React from "react";

export default function Education() {
  return (
    <>
      <section>
        <div className="container mt-5">
          <h2 className="fs-2 mb-4 text-primary">Education</h2>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">Year of passing</th>
                <th scope="col">Qualification</th>
                <th scope="col">Name of the Institution</th>
                <th scope="col">Percentage/CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2016-2019</th>
                <td>Bachelor of Technology, JNTUK</td>
                <td>Dadi institute of engineering and technology</td>
                <td>68.03</td>
              </tr>
              <tr>
                <th scope="row">2013-2016</th>
                <td>Diploma, APSBTET</td>
                <td>Dadi institute of engineering and technology</td>
                <td>83.34</td>
              </tr>
              <tr>
                <th scope="row">2012-2013</th>
                <td>SSC, Board of Secondary Education</td>
                <td>Zilla parishad high school</td>
                <td>7.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
