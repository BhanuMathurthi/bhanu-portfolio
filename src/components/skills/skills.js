import React from "react";
import { skilldatainfo } from "./skilldata";
import Skillcard from "./skillcard";

function createSkillcard(skillinfo) {
  return <Skillcard key={skillinfo.id} skill={skillinfo.skill} />;
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container align-items-center justify-content-center py-10 mx-auto pb-5">
        <div className="row">
          <h2 className="fs-2 pb-3 mt-5 text-center text-primary">
            <strong>Skills &amp; Technologies</strong>
          </h2>
          <p>
            I am currently looking for the job in frontend development in entry
            level, I am proficient in below mentioned technologies
          </p>
          {skilldatainfo.map(createSkillcard)}
        </div>
      </div>
      {/* <Certification /> */}
    </section>
  );
}
