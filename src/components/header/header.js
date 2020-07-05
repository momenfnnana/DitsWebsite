import React, { useEffect } from "react";
import "./header.scss";
// import "particles.js/particles";
// var jsonParticles = require("./particlesjs-config2.json");
import Particles from "react-particles-js";

const Header = ({ Element }) => {
  // const particlesJS = window.particlesJS;
  // console.log(particlesJS)
  // useEffect(() => {
  // console.log(jsonParticles, window.particlesJS)
  // window.particlesJS.load("particles-js", jsonParticles, function () {
  //   console.log("callback - particles.js config loaded");
  // });
  // Particles
  // }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="headerImgBackground">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 5,
                  duration: 2,
                  opacity: 0.7714733516862778,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            legt: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />  
        </div>
        
        <div className="row text-right mt-5 m-lg-0">
          <div className="col-lg-6 col-12 header-text">
            <h1 ref={Element} className="headLine">
              لماذا تعمل معنا
            </h1>
            <p>
              الشركة الأكفأ لتصميم وتطوير مواقع الانترنت وغيرها من الخدمات نقدم
              لكم الحلول والخدمات باحترافية عالية وأفضل جودة باستخدام أحدث
              التقنيات التكنولوجية أهم أهدافنا هو رضى زبائننا.
            </p>
            <a className="btn btn-primary headerBtn" href="#" role="button">
              اطلب خدمة
            </a>
          </div>
          <div className="col-lg-6 col-12 divImageHeader">
            <img
              src={require("../../constant/images/imageHeader.svg")}
              alt="image header"
              className="imageHeader img-fluid"
            />
          </div>
        </div>
        <script src="particles.js"></script>
      </div>
    </div>
  );
};

export default Header;
