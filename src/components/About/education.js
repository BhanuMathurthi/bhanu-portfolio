import React from "react";

export default function Education() {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="fs-2 mt-4 mb-3 text-primary">
            <strong>Education</strong>
          </h2>
          <div className="table-responsive d-flex justify-content-center my-4">
            <table className="table">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-center" scope="col">
                    Year of passing
                  </th>
                  <th className="text-center" scope="col">
                    Qualification
                  </th>
                  <th className="text-center" scope="col">
                    Name of the Institution
                  </th>
                  <th className="text-center" scope="col">
                    Percentage/CGPA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2016-2019</th>
                  <td>Bachelor of Technology, JNTUK</td>
                  <td>Dadi institute of engineering and technology</td>
                  <td className="text-center">68.03</td>
                </tr>
                <tr>
                  <th scope="row">2013-2016</th>
                  <td>Diploma, APSBTET</td>
                  <td>Dadi institute of engineering and technology</td>
                  <td className="text-center">83.34</td>
                </tr>
                <tr>
                  <th scope="row">2012-2013</th>
                  <td>SSC, Board of Secondary Education</td>
                  <td>Zilla parishad high school</td>
                  <td className="text-center">7.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
