import React from "react";
import "./Blog.scss";
// import "react-awesome-slider/dist/styles.css";
import CardWithButton from "../../cards/CardWithButton/CardWithButton";
import ServiceDescription from "../../service-description-with-image/ServiceDescription";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageSlider1 from '../../../constant/images/image-slide1.svg';
import imageSlider2 from '../../../constant/images/image-slide2.svg'
const Blog = () => {
  AOS.init();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-container">
          <div className="image-slider" style={{ backgroundImage: `url(${imageSlider1})` }}></div>
          <div class="OverLay"></div>
          <div className="text-slider w-50">
            <h4 className="text-right">تويتر تُوقف ميزة التنبيه بالتغريدات
              عبر الرسائل النصية القصيرة</h4>
            <p className="text-right">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات
          </p>
          </div>
        </div>
        <div className="slider-container">
          <div className="image-slider" style={{ backgroundImage: `url(${imageSlider2})` }}></div>
          <div class="OverLay"></div>
          <div className="text-slider w-50">
            <h4 className="text-right">تويتر تُوقف ميزة التنبيه بالتغريدات
              عبر الرسائل النصية القصيرة</h4>
            <p className="text-right">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات
          </p>
          </div>
        </div>
        <div className="slider-container">
          <div className="image-slider" style={{ backgroundImage: `url(${imageSlider1})` }}></div>
          <div class="OverLay"></div>
          <div className="text-slider w-50">
            <h4 className="text-right">تويتر تُوقف ميزة التنبيه بالتغريدات
              عبر الرسائل النصية القصيرة</h4>
            <p className="text-right">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات
          </p>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="row">
          <h4 className="col-12 d-felx title mt-5">المقالات الأحدث</h4>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image1.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image2.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image3.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image1.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image2.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-lg-4 col-md-6"
          >
            <CardWithButton
              img={require("../../../constant/images/card-image3.png")}
              cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
              cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            id="aboutUs"
          >
            <ServiceDescription
              className1="col-lg-6 order-2 order-lg-1 d-felx align-items-center justify-content-center"
              className2="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end"
              img={require("../../../constant/images/Advice-web-development.svg")}
              title="نصائح لتصميم موقعك"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
            ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
            "
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            id="aboutUs"
          >
            <ServiceDescription
              className1="col-lg-6 order-2 order-lg-2 d-felx align-items-center justify-content-center"
              className2="col-lg-6 order-1 order-lg-1 d-flex justify-content-center justify-content-lg-start"
              img={require("../../../constant/images/Advice-design-mobile.svg")}
              title="نصائح لتصميم تطبيقك"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
            ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
