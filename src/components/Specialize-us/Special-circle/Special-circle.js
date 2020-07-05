import React from "react";
import "./Special-circle.scss";
import { Triangle } from "react-shapes";

const SpecialCircle = ({ fullInsideCircle, insideCircle, img, text }) => {
  return (
    <div className={fullInsideCircle}>
      <div className="circleFather rounded-circle d-flex justify-content-center align-items-center">
        <div className={insideCircle}>
          <img src={img} alt="SpecializeLamp" />
          <h6 className="mx-3 circleChildTitle">{text}</h6>
        </div>
      </div>
      <div className="Triangle">
        <Triangle width={130} height={50} fill={{ color: "#2364D8" }} />
      </div>
    </div>
  );
};
export default SpecialCircle;
