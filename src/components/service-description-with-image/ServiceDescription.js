import React from "react";
import "./ServiceDescription.scss";
const ServiceDescription = ({ title, subTitle, img }) => {
  return (
    <div
      className="row align-items-center"
      dir="rtl"
      id="aboutUs"
    >
      <div className="col-lg-9 order-2 order-lg-1">
        <div>
          <h4 className="title mb-3 my-3">{title}</h4>
          <p className="desc">{subTitle}</p>
        </div>
      </div>
      <div className={className2}>
        <img
          src={img}
          alt="for-description"
          className="image d-flex justify-contnet-center"
        />
      </div>
    </div>
  );
};
export default ServiceDescription;
