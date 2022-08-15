import React from "react";

export default function Details(props) {
  return (
    <>
      <div className="card-text">
        <h2 className="fs-4 text-dark text-center">{props.detailinfo}</h2>{" "}
        <p style={{fontSize: "16px", lineHeight: '1.6rem'}} className="text-dark"> {props.detailinfodescription} </p>
      </div>
    </>
  );
}
