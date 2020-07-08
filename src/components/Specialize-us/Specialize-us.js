import React from "react";
import "./Specialize-us.scss";
import SpecialCircle from "./Special-circle/Special-circle";
const Specialize = () => {
  return (
    <div dir="rtl" className="d-flex justify-content-center specialize-us-section">
      <div className="row">
        <div
          className="full-ball rounded-circle d-flex justify-content-center align-items-center">
          <div
            className="Specialize-title-ball-father rounded-circle d-flex justify-content-center align-items-center">
            <div className="Specialize-title-ball d-flex justify-content-center align-items-center rounded-circle mx-auto">
              <h1 className="Specialize-title">ما يميزنا</h1>
            </div>
          </div>
          <div
            className="fullInsideCircle1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <SpecialCircle
              fullInsideCircle="InsideCircle1"
              img={require('../../constant/images/lamp.svg')}
              text="سنوات من الخبرة"
              insideCircle="insideCircle rounded-circle h-75 w-75 d-flex flex-column justify-content-center align-items-center"
            />
          </div>
          <div
            className="fullInsideCircle2"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <SpecialCircle
              fullInsideCircle="InsideCircle2"
              img={require('../../constant/images/Professional.svg')}
              text="الإحترافية"
              insideCircle="insideCircle rounded-circle h-75 w-75 d-flex flex-column justify-content-center align-items-center"
            />
          </div>
          <div
            className="fullInsideCircle3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <SpecialCircle
              fullInsideCircle="InsideCircle3"
              img={require('../../constant/images/fast.svg')}
              text="سرعة الأداء"
              insideCircle="insideCircle rounded-circle h-75 w-75 d-flex flex-column justify-content-center align-items-center"
            />
          </div>
          <div
            className="fullInsideCircle4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <SpecialCircle
              fullInsideCircle="InsideCircle4"
              img={require('../../constant/images/satisfay.svg')}
              text="مرضاة الزبون هدفنا"
              insideCircle="insideCircle rounded-circle h-75 w-75 d-flex flex-column justify-content-center align-items-center"
            />
          </div>
          <div
            className="fullInsideCircle5"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <SpecialCircle
              fullInsideCircle="InsideCircle5"
              img={require('../../constant/images/correctlyJob.svg')}
              text="إتقان العمل"
              insideCircle="insideCircle rounded-circle h-75 w-75 d-flex flex-column justify-content-center align-items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specialize;
