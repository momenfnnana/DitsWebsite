import React from "react";
import "./Service-description.css";
const ServiceDescription = ({ title, textDescription }) => {
  return (
    <div className="container-fluid row mx-0 d-flex align-items-center" dir="rtl">
      <div className="col-lg-9 order-2 order-lg-1">
        <div className="row text">
          <h4>{title}</h4>
          <p className="description">{textDescription}</p>
        </div>
      </div>
      <div className="col-lg-3 order-1 order-lg-2 d-flex justify-content-center">
        <img
          src={require("../../constant/images/about-us.svg")}
          alt="image-for-description"
          className="image d-flex justify-contnet-center"
        />
      </div>
    </div>
  );
};
export default ServiceDescription;
