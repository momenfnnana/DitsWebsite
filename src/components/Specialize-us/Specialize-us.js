import React from "react";
import "./Specialize-us.scss";
import SpecialCircle from "./Special-circle/Special-circle";
const Specialize = () => {
  return (
    <div dir="rtl" className="container">
      <div className="full-ball rounded-circle d-flex justify-content-center align-items-center">
        <div className="Specialize-title-ball-father rounded-circle d-flex justify-content-center align-items-center">
          <div className="Specialize-title-ball d-flex justify-content-center align-items-center rounded-circle mx-auto">
            <h1 className="Specialize-title">ما يميزنا</h1>
          </div>
        </div>
      </div>
      <div className="row around-circle">
        <div className="col-6 d-flex flex-column align-items-center">
          <SpecialCircle
            fullInsideCircle="d-flex my-3 full-inside-circle1"
            insideCircle="rounded-circle d-flex flex-column justify-content-center align-items-center inside-circle1"
            img={require("../../constant/images/SpecializeLamp.svg")}
            text="سنوات من الخبرة"
          />
          <SpecialCircle
            fullInsideCircle="d-flex my-3 full-inside-circle2"
            insideCircle="rounded-circle d-flex flex-column justify-content-center align-items-center inside-circle2"
            img={require("../../constant/images/Professional.svg")}
            text="الإحترافية"
          />
        </div>
        <div className="col-6 d-flex flex-column align-items-center">
          <SpecialCircle
            fullInsideCircle="d-flex my-3 full-inside-circle3"
            insideCircle="rounded-circle d-flex flex-column justify-content-center align-items-center inside-circle3"
            img={require("../../constant/images/correctlyJob.svg")}
            text="إتقان العمل"
          />
          <SpecialCircle
            fullInsideCircle="d-flex my-3 full-inside-circle4"
            insideCircle="rounded-circle d-flex flex-column justify-content-center align-items-center inside-circle4"
            img={require("../../constant/images/satisfay.svg")}
            text="مرضاة الزبون هدفنا"
          />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <SpecialCircle
            fullInsideCircle="d-flex my-3 full-inside-circle5"
            insideCircle="rounded-circle d-flex flex-column justify-content-center align-items-center inside-circle5"
            img={require("../../constant/images/fast.svg")}
            text="سرعة الأداء"
          />
        </div>
      </div>
    </div>
  );
};
export default Specialize;
