import React from "react";
import { projectData } from "./projectdata";
import Projectcard from "./projectcard";

function createCard({ id, imgURL, title, subtitle, description, projectrepo, view }) {
  return (
    <Projectcard
      key={id}
      images={imgURL}
      title={title}
      subtitle={subtitle}
      description={description}
      projectrepo={projectrepo}
      view={view}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container pb-5">
        <div className="row">
          <h2 className="fs-2 my-4 text-center text-primary">
            <strong>Projects I've Built</strong>
          </h2>
          {projectData.map(createCard)}
        </div>
      </div>
    </section>
  );
}
