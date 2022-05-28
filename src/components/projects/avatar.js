import React from "react";

export default function ProjectGallery({ img }) {
  return (
    <>
      <img
        src={img}
        loading="lazy"
        className="card-img-top"
        height="250"
        alt="Project demo"
      />
    </>
  );
}
