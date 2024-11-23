import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";

function CareerDesc(props) {
  return (
    <div className="col-12 col-md-10 mt-4">
      {/* Title Section */}
      <div className="row border-bottom border-2">
        <div className="col-12 display-5 mb-4">{props.title}</div>
      </div>

      {/* Dynamically create rows */}
      {props.desc.map((item, index) => (
        <div className="row mt-4 mb-5 py-2 fs-5 h-25" key={index}>
          <div className="col-5 col-lg-3">
            {`${item.startDate} - ${item.endDate}`}
          </div>
          <div className="col-7 col-lg-9">
            <div className="fw-bold">{item.title}</div>
            <div className="mt-3">{item.institution}</div>
            <div className="mt-3">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CareerDesc;
