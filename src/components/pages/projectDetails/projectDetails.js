import React from "react";
import "./projectDetalis.scss";
import { MdContentCopy, MdDateRange } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Navbar from "../../navbar/navbar";
import HeadingLine from "../../heading-line/headingLine";
import ContactWithUs from "../../ContactWithUs/ContactWithUs";
import Footer from "../../footer/footer";
import Coverflow from "react-coverflow";

const ProjectDetails = (props) => {
  const widthScreen = window.innerWidth;
  return (
    <div dir="rtl">
      <Navbar sticky={true} />
      <div className="content-page container">
        <div className="row">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <HeadingLine
              title="برمجة تطبيق موسيقى"
              className="justify-content-center justify-content-lg-start"
            />
            <div className="mx-3 mt-3">
              <div className="d-flex justify-content-center justify-content-lg-start">
                <AiOutlineFundProjectionScreen
                  size="24px"
                  color="#2364D8"
                  className="mx-2"
                />
                <p className="list">مشروع : موقع نمو المنشآت</p>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <MdDateRange size="24px" color="#2364D8" className="mx-2" />
                <p className="list">التاريخ : 11/2/2020</p>
              </div>
              <p className="text-center text-lg-right mr-2">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
            <HeadingLine
              title="مميزات التطبيق"
              className="justify-content-center justify-content-lg-start mt-5"
            />
            <div className="mx-3 mt-3">
              <p className="text-center text-lg-right mr-2">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <img
              src={require("../../../constant/images/mobileDevelop.svg")}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="project-example"
            />
          </div>
        </div>
        <div className="my-5">
          <HeadingLine
            title="شاشات التطبيق"
            className="justify-content-center justify-content-lg-start"
          />
          <div dir="ltr">
            <Coverflow
              displayQuantityOfSide={(widthScreen>768) ? 2 : 1}
              navigation={false}
              infiniteScroll={true}
              enableHeading={false}
              media={{
                "@media (max-width: 900px)": {
                  width: "100%",
                  height: "32rem",
                },
                "@media (min-width: 900px)": {
                  width: "100%",
                  height: "30rem",
                },
              }}
            >
              <img
                src={require("../../../constant/images/mobileScreen.svg")}
                // data-action="https://facebook.github.io/react/"
                
              />
              <img
                src={require("../../../constant/images/mobileScreen.svg")}
                // data-action="https://facebook.github.io/react/"
                
              />
              <img
                src={require("../../../constant/images/mobileScreen.svg")}
                // data-action="https://facebook.github.io/react/"
                
              />
              <img
                src={require("../../../constant/images/mobileScreen.svg")}
                // data-action="https://facebook.github.io/react/"
                
              />
              <img
                src={require("../../../constant/images/mobileScreen.svg")}
                // data-action="https://facebook.github.io/react/"
                
              />
            </Coverflow>
          </div>
        </div>
      </div>
      <ContactWithUs />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
