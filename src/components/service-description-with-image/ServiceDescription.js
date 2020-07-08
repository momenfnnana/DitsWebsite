import React from "react";
import "./ServiceDescription.scss";
const ServiceDescription = ({ title, subTitle, img, className1, className2 }) => {
  return (
    <div
      className="row align-items-center"
      dir="rtl"
      id="aboutUs"
    >
      <div className={className1}>
        <div>
          <h4 className="title mb-3 my-3">{title}</h4>
          <p className="desc">{subTitle}</p>
        </div>
      </div>
      <div className={`justify-content-lg-end d-flex justify-content-center ${className2}`}>
        <img
          src={img}
          alt="for-description"
          className="image w-75"
        />
      </div>
    </div>
  );
};
export default ServiceDescription;
