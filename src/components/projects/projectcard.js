import React from "react";
import ProjectGallery from "./avatar";
import Details from "./detail";

export default function Projectcard({
  id,
  images,
  title,
  projectDescription,
  link,
}) {
  return (
    <div className="col-lg-6 col-md-6 mt-3 mb-3" key={id}>
      <div className="card">
        <ProjectGallery img={images} />
        <div className="card-body">
          <Details detailinfo={title} />
          <Details detailinfodescription={projectDescription} />
          <div className="d-flex justify-content-center">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Project Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
