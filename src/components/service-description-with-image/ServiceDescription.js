import React from "react";
import "./ServiceDescription.scss";
const ServiceDescription = ({ title, subTitle, img, className1, className2 }) => {
  return (
    <div
      className="row align-items-center service-description"
      dir="rtl"
    >
      <div
        className={`${className1}`}>
        <h4 className="title mb-3 my-3">{title}</h4>
        <p className="desc">{subTitle}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        id="aboutUs"
        className={`d-flex justify-content-center align-items-center mt-auto ${className2}`}>
        <img
          src={img}
          alt="for-description"
          className="image"
        />
      </div>
    </div>
  );
};
export default ServiceDescription;
