import React from "react";
import ProjectGallery from "./avatar";
import Details from "./detail";

export default function Projectcard({
  id,
  images,
  title,
  description,
  projectrepo,
  subtitle,
  view,
}) {
  return (
    <div className="col-lg-6 col-md-6 mt-3 mb-3" key={id}>
      <div className="card" style={{height: "550px"}}>
        <ProjectGallery img={images} />
        <div className="card-body">
          <Details detailinfo={title} />
          <Details detailinfodescription={description} />
          {/* <Details detailsubtitle={subtitle} /> */}
          <p style={{fontSize: "15px"}}> <strong>Tech Stack:</strong> {subtitle}</p>
          <div className="d-flex justify-content-center my-4">
            <a
              href={projectrepo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-success"
            >
              Project Repo
            </a> &nbsp; &nbsp;
            <a
              href={view}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              View 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
