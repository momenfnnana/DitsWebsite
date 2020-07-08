import React from "react";
import "./Special-circle.scss";

const SpecialCircle = ({ fullInsideCircle, insideCircle, img, text }) => {
  return (
    <div className={fullInsideCircle}>
      <div className="circleFather rounded-circle d-flex justify-content-center align-items-center">
        <div className={insideCircle}>
          <img className="shape-image" src={img} alt="SpecializeLamp" />
          <h6 className="mx-1 mt-1 circleChildTitle">{text}</h6>
        </div>
      </div>
      <div className="Triangle">
      </div>
    </div>
  );
};
export default SpecialCircle;
