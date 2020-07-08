import React from "react";
import "./ContactWithUs.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const ContactWithUs = () => {
  return (
    <div className="full-form" id="ContactUs">
      <div className="container">
        <div className="row" >
          <div className="col-12 col-lg-4  my-5">
            <h4 className="contact-us-title">تواصل معنا</h4>
            <p className="contact-us-subTitle my-4">
              نحن على استعداد لتقبل جميع استفساراتكم والرد عليها في أسرع وقت
            </p>
            <div className="phone-number my-3 d-flex">
              <FaPhone color="#2364D8" />
              <div className="d-flex flex-column align-items-start">
                <p className="text-right my-auto mr-2">+966 53 920 6204</p>
                <p className="text-right my-auto mr-2">+968 9170 0258</p>
              </div>
            </div>
            <div className="mail my-3 d-flex">
              <MdEmail className="mail-icon" size="20px" />
              <p className="text-right my-auto mr-2">info@dits.io</p>
            </div>
            <div className="location my-3 d-flex">
              <MdLocationOn className="mail-icon" size="25px" />
              <p className="text-right my-auto mr-2">
                شارع الشهداء، الرياض 12341، السعودية شارع الكساب، مسندام، سلطنة
                عمان
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-8 form-side">
            <div className="row justify-content-around">
              <div className="col-12 col-lg-6 mb-4">
              <input
                className="form-control rounded-pill py-4"
                placeholder="اسمك"
              />
              </div>
              <div className="col-12 col-lg-6">
              <input
                className="form-control rounded-pill py-4"
                placeholder="البريد الالكتروني"
              />
              </div>
            </div>
            <textarea
              className="col-12 h-75 form-control mt-4 pt-3 text-area"
              placeholder="أكتب رسالتك هنا"
            ></textarea>
            <button
              type="button"
              class="btn btn-primary rounded-pill px-4 details-button w-100 mb-4 mt-4 py-2"
            >
              أرسل الرسالة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactWithUs;
