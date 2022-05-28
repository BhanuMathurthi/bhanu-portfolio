import React from "react";

export default function Skillcard({ id, skill }) {
  return (
    <div className="col-lg-6 text-center" key={id}>
      <p style={{ backgroundColor: "#424242" }} className="text-light p-2">
        {" "}
        {skill}{" "}
      </p>
    </div>
  );
}
