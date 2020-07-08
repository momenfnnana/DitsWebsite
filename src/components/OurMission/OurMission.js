import React from "react";
import "./OurMission.scss";
import { IoIosArrowDropleftCircle } from "react-icons/io";
const OurMission = () => {
  return (
    <div className="OurMission mx-0 py-5" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 my-5 d-flex justify-content-center w-100">
            <img
              src={require("../../constant/images/ourMissionLamp.png")}
              alt="lamp"
              className="w-75 image"
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
            <h4 className="ourMissionTitle mb-5">مهمتنا ورؤيتنا</h4>
            <div className="d-flex">
              <IoIosArrowDropleftCircle size="30px" color="#fff" />
              <p className="ourMissionDescription mx-2">
                هي توفير نظم وحلول تقنية للشركات على أعلى مستوى من الكفاءة
                والفاعلية وتقديم أعلى قيمة لمستخدميها بأنسب تكلفة مما يؤدي إلى
                تطوير المنشأت بأقل الإستثمارات
              </p>
            </div>
            <div className="d-flex">
              <IoIosArrowDropleftCircle size="30px" color="#fff" />
              <p className="ourMissionDescription mx-2">
                نؤمن بأن نجاح عملاؤنا فى ادارة أعمالهم من خلال استخدامهم
                لأنظمتنا هو المؤشر الرئيسى على نجاحنا . عملاؤنا شركاء دائمين لأن
                نجاحنا واستمرارنا يتوقف عليهم
              </p>
            </div>
            <div className="d-flex">
              <IoIosArrowDropleftCircle size="30px" color="#fff" />
              <p className="ourMissionDescription mx-2">
                هي توفير نظم وحلول تقنية للشركات على أعلى مستوى من الكفاءة
                والفاعلية وتقديم أعلى قيمة لمستخدميها بأنسب تكلفة مما يؤدي إلى
                تطوير المنشأت بأقل الإستثمارات
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurMission;
