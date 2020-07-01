import React from "react";
import "./ourService.css";
import ServiceDescription from "../../service-description-with-image/ServiceDescription";
import Card from "../../cards/card-with-title/Card-with-title";
import ContactWithUs from "../../ContactWithUs/ContactWithUs";
// const options = {
//   items: 1,
//   nav: true,
//   rewind: true,
//   autoplay: true
// };

// const events = {
//   onDragged: function(event) {...},
//   onChanged: function(event) {...}
// };
const OurService = () => {
  return (
    <div dir="rtl" className="mt-5">
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <link rel="stylesheet" href="owl-carousel/owl.theme.css" />
      <div className="container">
        <ServiceDescription
          className1="col-lg-8 order-2 order-lg-1"
          className2="col-lg-4 order-1 order-lg-2 d-flex justify-content-center"
          img={require("../../../constant/images/develop-mobile-app.svg")}
          title="تطوير تطبيقات الجوال"
          subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
        ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        "
        />
        <h4 className="popularService">أبرز أعمالنا</h4>
        <p className="interset-details">نحن نهتم بأدق التفاصيل </p>
        <div className="row">
          <div className="col-4">
            <Card
              img={require("../../../constant/images/Desktop-Mock-up-1.svg")}
              title="برمجة موقع نمو المنشئات"
            />
          </div>
          <div className="col-4">
            <Card
              img={require("../../../constant/images/web-develop.svg")}
              title="برمجة موقع نمو المنشئات"
            />
          </div>
          <div className="col-4">
            <Card
              img={require("../../../constant/images/wordDevelopment.svg")}
              title="برمجة موقع ورد"
            />
          </div>
        </div>
      </div>
      <div>
        <ContactWithUs />
      </div>
      {/* <OwlCarousel ref="car" options={options} events={events}>
        <div>
          <img src="/img/fullimage1.jpg" alt="The Last of us" />
        </div>
        <div>
          <img src="/img/fullimage2.jpg" alt="GTA V" />
        </div>
        <div>
          <img src="/img/fullimage3.jpg" alt="Mirror Edge" />
        </div>
      </OwlCarousel> */}
    </div>
  );
};
export default OurService;
