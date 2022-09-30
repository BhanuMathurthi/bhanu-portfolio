import React from "react";
import { skilldatainfo } from "./skilldata";
import Skillcard from "./skillcard";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container align-items-center justify-content-center py-10 mx-auto pb-5">
        <div className="row">
          <h2
            style={{ color: "#042D41" }}
            className="fs-2 pb-3 mt-3 fw-bold text-center"
          >
            Skills &amp; Technologies
          </h2>
          <p>
            I am currently looking for the job in frontend development in entry
            level, I am proficient in below mentioned technologies
          </p>
          {skilldatainfo.map((skillinfo) => (
            <Skillcard key={skillinfo.id} skill={skillinfo.skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
