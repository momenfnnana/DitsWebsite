import React from "react";
import "./home.scss";
import ServiceDescription from "../../service-description-with-image/ServiceDescription";
import Card from "../../cards/card-with-title/Card-with-title";
import DescriptionWithImage from "../../DescriptionWithImage/DescriptionWithImage";
import OurMission from "../../OurMission/OurMission";
import CardWithButton from "../../cards/CardWithButton/CardWithButton";
import GetNotification from "../../getNotification/getNotification";
import PersonCard from "../../cards/card-with-person/PersonCard";
// import Navbar from "../../navbar/navbar";
import useSticky from "../../../hooks/useSticky";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import ContactWithUs from "../../ContactWithUs/ContactWithUs";
import Specialize from "../../Specialize-us/Specialize-us";
import Navbar from "../../navbar/navbar";
const Index = ({ history }) => {
  const { isSticky, element } = useSticky();
  return (
    <div className="w-100" dir="rtl">
      <Navbar sticky={isSticky} />
      <Header Element={element} />
      <div dir="rtl" className="container">
        <ServiceDescription
          className1="col-lg-9 order-2 order-lg-1 about-us-section"
          className2="col-lg-3 order-1 order-lg-2 d-flex justify-content-center"
          img={require("../../../constant/images/Group.png")}
          title="من نحن"
          subTitle="شركة ديتس, شركة متخصصة في تطوير تكنولوجيا المعلومات ، أطلقت خدماتها مع نظام احترافي متكامل ومبتكر للحلول الإبداعية. لقد قدمنا ​​اسمًا لامعًا جدًا لشركتنا في مجال تكنولوجيا المعلومات من خلال مواكبة أحدث التقنيات.
وبإبتكار الشركة للأساليب والتقنيات المهنية في مشاريعها الخاصة وتكامل فريقها، أصبح فريقنا جدير بالثقة وتم تعزيزه من خلال خبرة طويلة. تعاملنا مع العديد من العملاء بما في ذلك المنظمات ووكالات الأنباء والعملاء من جميع أنحاء العالم."
        />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          id="ourServices"
        >
          <h4 className="title our-Service mb-4">خدماتنا</h4>
        </div>
        <div className="row d-flex justify-content-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-sm-6 col-lg-4"
          >
            <Card
              img={require("../../../constant/images/mobile-development.svg")}
              title="تطوير تطبيقات الجوال"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-sm-6 col-lg-4 on-resize"
          >
            <Card
              img={require("../../../constant/images/ui-ux-development.svg")}
              title="تصميم واجهات وتجربة المستخدم"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-sm-6 col-lg-4"
          >
            <Card
              img={require("../../../constant/images/web-development.svg")}
              title="تطوير وبرمجة الويب"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
          <Specialize />
        </div>
        <div>
          <div className="projects-section row" id="ourJobs">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-12 col-md-7 d-flex flex-column align-items-center align-items-md-end"
            >
              <h4 className="our-project-title d-flex justify-content-center ">
                نبذة من اعمالنا
            </h4>
              <p className="mt-4 we-interest">نحن نهتم بأدق التفاصيل </p>
            </div>
            <div className="col-12 col-md-5 d-flex flex-column align-items-center align-items-md-end">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="d-flex flex-row"
              >
                <h6 className="showMore" onClick={() => history.push('/blog')}>عرض الكل</h6>
                {/* <IoIosArrowBack size="20px" color="#2364D8" /> */}
              </div>
            </div>
          </div>
          <DescriptionWithImage
            ImageAnimationDirection="fade-right"
            textAnimationDirection="fade-left"
            headingLine="برمجة موقع نمو المنشئات"
            serviceExample="مشروع : موقع نمو المنشآت"
            servicePart="التصنيف : برمجة مواقع الويب"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/web-develop.svg")}
            classNameText="d-flex flex-column justify-content-center order-2 order-lg-1 col-12 col-lg-6"
            classNameImage=" order-1 order-lg-2 col-12 col-lg-6"
          />
          <DescriptionWithImage
            ImageAnimationDirection="fade-left"
            textAnimationDirection="fade-right"
            headingLine="برمجة تطبيق موسيقى"
            serviceExample="مشروع : تطبيق  سوشيال ميديا موسيقية"
            servicePart="التصنيف : برمجة تطبيقات الجوال"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/mobile-develop.png")}
            classNameText="d-flex flex-column justify-content-center order-2 order-lg-2 col-12 col-lg-6"
            classNameImage=" order-1 order-lg-1 col-12 col-lg-6"
          />
          <DescriptionWithImage
            ImageAnimationDirection="fade-right"
            textAnimationDirection="fade-left"
            headingLine="تصميم وتحريك فيديو موشن جرافيك"
            serviceExample="مشروع :  فيديو موشن للبنك الوطني الإسلامي"
            servicePart="التصنيف : موشن جرافيك"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/motion-graphic.png")}
            classNameText="d-flex flex-column justify-content-center order-2 order-lg-1 col-12 col-lg-6"
            classNameImage=" order-1 order-lg-2 col-12 col-lg-6"
          />
        </div>
      </div>
      <OurMission />
      <div className="container">
        <div className="row Blog-section" id="blog">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-md-7 d-flex flex-column align-items-center align-items-md-end"
          >
            <h4 className="last-technology-update text-center text-md-right">
              المدونة (آخر الأخبار والمقالات)
          </h4>
          </div>
          <div className="col-12 col-md-5 d-flex flex-column align-items-center align-items-md-end">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="d-flex flex-row"
            >
              <h6 className="showMore">عرض المزيد</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
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
        </div>
      </div>
      <GetNotification />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container rating"
        id="sayAboutUs"
      >
        <h4 className="our-project-title d-flex justify-content-center">
          قالو عنا
        </h4>
        <p className="subtitle mt-4">
          ! آراء زبائننا الكرام ممن وضعوا ثقتهم في خدماتنا , لتكُن أنت التالي
        </p>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6">
            <PersonCard
              img={require("../../../constant/images/face.svg")}
              name="شركة الوئام للتجارة"
              description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
لقد تم توليد  هذا النص من مولد النص العربى . "
              color1="#ABBDBA"
              color2="#FCDD21"
              color3="#FCDD21"
              color4="#FCDD21"
              color5="#FCDD21"
            />
          </div>
          <div className="col-12 col-lg-4 col-md-6">
            <PersonCard
              img={require("../../../constant/images/face.svg")}
              name="شركة الوئام للتجارة"
              description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
لقد تم توليد  هذا النص من مولد النص العربى . "
              color1="#ABBDBA"
              color2="#FCDD21"
              color3="#FCDD21"
              color4="#FCDD21"
              color5="#FCDD21"
            />
          </div>
          <div className="col-12 col-lg-4 col-md-6">
            <PersonCard
              img={require("../../../constant/images/face.svg")}
              name="شركة الوئام للتجارة"
              description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
لقد تم توليد  هذا النص من مولد النص العربى . "
              color1="#ABBDBA"
              color2="#FCDD21"
              color3="#FCDD21"
              color4="#FCDD21"
              color5="#FCDD21"
            />
          </div>
        </div>
      </div>
      <ContactWithUs />
    </div >
  );
};
export default Index;
