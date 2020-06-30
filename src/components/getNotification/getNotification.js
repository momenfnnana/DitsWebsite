import React from "react";
import "./getNotification.css";
import { MdEmail } from "react-icons/md";
const GetNotification = () => {
  return (
    <div className="get-notification py-3">
      <div className="container">
        <MdEmail className="mail-icon" size="50px" />
        <h4 className="notification-title mb-4">ابق على علم بكل جديد</h4>
        <h6 className="subTitle mb-3">تابع الاخبار والعروض اولاً بأول</h6>
        <div className="d-flex input-container w-50 rounded-pill align-items-center mx-auto">
          <input
            placeholder="أدخل البريد الإلكتروني"
            className="form-control input rounded-pill mr-2"
          />
          <div className="my-1 mx-1 d-flex align-self-center">
            <button
              type="button"
              class="btn btn-primary rounded-pill px-4 details-button"
            >
              اشترك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetNotification;
