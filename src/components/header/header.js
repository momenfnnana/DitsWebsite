import React, { useEffect } from "react";
import "./header.scss";
// import "particles.js/particles";
// var jsonParticles = require("./particlesjs-config2.json");
import Particles from 'react-particles-js';


const Header = ({Element}) => {
  // const particlesJS = window.particlesJS;
  // console.log(particlesJS)
  useEffect(() => {
    // console.log(jsonParticles, window.particlesJS)
    // window.particlesJS.load("particles-js", jsonParticles, function () {
    //   console.log("callback - particles.js config loaded");
    // });
    // Particles
  }, []);

  return (
    <div className="container content">
      {/* <div id="particles-js"></div> */}
      {/* <Particles 
        params={{particles: require('./particlesjs-config2.json').particles}}
        style={{
                width: '100%',
              }} /> */}

      {/* <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
        }}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          legt: 0,
          bottom: 0,
          zIndex: 1,
          // backgroundImage: `url(${logo})`
        }}
        
      /> */}

      <div className="headerImgBackground"></div>
      <div className="row text-right mt-5">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 header-text">
          <h1 ref={Element} className="headLine">لماذا تعمل معنا</h1>
          <p>
            الشركة الأكفأ لتصميم وتطوير مواقع الانترنت وغيرها من الخدمات نقدم
            لكم الحلول والخدمات باحترافية عالية وأفضل جودة باستخدام أحدث
            التقنيات التكنولوجية أهم أهدافنا هو رضى زبائننا.
          </p>
          <a className="btn btn-primary headerBtn" href="#" role="button">
            اطلب خدمة
          </a>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 divImageHeader">
          <img
            src={require("../../constant/images/imageHeader.svg")}
            alt="image header"
            className="imageHeader img-fluid"
          />
        </div>
      </div>
      <script src="particles.js"></script>
    </div>
  );
};

export default Header;
