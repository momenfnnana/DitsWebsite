import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer  className="position-relative pb-2 mt-5" style={{color:'#5B5B5B'}}>
    <img className="position-absolute rightImg d-none d-md-block" src={require("../../constant/images/bg-RightFooter.svg")} />
    <img className="position-absolute leftImg d-none d-md-block" src={require("../../constant/images/bg-LeftFooter.svg")} />
      <div className="container">
        <img
          className="img-fluid brand-footer"
          src={require("../../constant/images/headerBrand.svg")}
        />
        <div className="d-flex justify-content-center mt-4">
          <a href="#" className="ml-sm-2 ml-1">
            <img className="social-media-icon" src={require("../../constant/images/whatsapp.svg")} />
          </a>
          <a href="#" className="ml-sm-2 ml-1">
            <img className="social-media-icon" src={require("../../constant/images/twitter.svg")} />
          </a>
          <a href="#" className="ml-sm-2 ml-1">
            <img className="social-media-icon" src={require("../../constant/images/facebook.svg")} />
          </a>
          <a href="#" className="ml-sm-2 ml-1">
            <img className="social-media-icon" src={require("../../constant/images/instagram.svg")} />
          </a>
        </div>
        <div className="links-footer d-flex justify-content-center mb-3 mt-1">
          <a href="#" className="ml-3">
            <span style={{color:'#5B5B5B'}}>من نحن</span>
          </a>
          <a href="#" className="ml-3">
            <span style={{color:'#5B5B5B'}}>سياسة الخصوصية</span>
          </a>
          <a href="#">
            <span style={{color:'#5B5B5B'}}>تواصل معنا</span>
          </a>
        </div>
        <div className="align-items-center d-flex justify-content-center">
          <img
            src={require("../../constant/images/copyright.svg")}
            className="ml-1"
          />
          <p className="m-0 copy-rights">جميع الحقوق محفوظة لدى شركة ديتس للبرمجيات</p>
        </div>
        {/* <div className="Clouds position-top">
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
        </div>
        <div className="Clouds position-center">
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
        </div>
        <div className="Clouds position-bottom">
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
