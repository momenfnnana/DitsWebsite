import React from "react";
import "./ServiceDescription.css";
const ServiceDescription = ({
  className1,
  className2,
  title,
  subTitle,
  img,
}) => {
  return (
    <div className="row align-items-center" dir="rtl">
      <div className={className1}>
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
