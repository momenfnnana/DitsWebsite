import React from "react";
import "./home.css";
import ServiceDescription from "../../service-description-with-image/ServiceDescription";
import Card from "../../cards/card-with-title/Card-with-title";
import DescriptionWithImage from "../../DescriptionWithImage/DescriptionWithImage";
import OurMission from "../../OurMission/OurMission";
import CardWithButton from "../../cards/fully-card/CardWithButton";
import { IoIosArrowBack } from "react-icons/io";
const Index = () => {
  return (
    <div className="w-100" dir="rtl">
      <div dir="rtl" className="container">
        <ServiceDescription
          img={require("../../../constant/images/Group.png")}
          title="من نحن"
          subTitle="شركة ديتس, شركة متخصصة في تطوير تكنولوجيا المعلومات ، أطلقت خدماتها مع نظام احترافي متكامل ومبتكر للحلول الإبداعية. لقد قدمنا ​​اسمًا لامعًا جدًا لشركتنا في مجال تكنولوجيا المعلومات من خلال مواكبة أحدث التقنيات.
وبإبتكار الشركة للأساليب والتقنيات المهنية في مشاريعها الخاصة وتكامل فريقها، أصبح فريقنا جدير بالثقة وتم تعزيزه من خلال خبرة طويلة. تعاملنا مع العديد من العملاء بما في ذلك المنظمات ووكالات الأنباء والعملاء من جميع أنحاء العالم."
        />
        <h4 className="title d-flex mt-5 mb-4">خدماتنا</h4>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <Card
              img={require("../../../constant/images/mobile-development.svg")}
              title="تطوير تطبيقات الجوال"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 on-resize">
            <Card
              img={require("../../../constant/images/ui-ux-development.svg")}
              title="تصميم واجهات وتجربة المستخدم"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Card
              img={require("../../../constant/images/web-development.svg")}
              title="تطوير وبرمجة الويب"
              subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس 
            المساحة، لقد تم توليد هذا النص من مولد النص 
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد"
            />
          </div>
        </div>
        <div>
          <div className="d-flex mt-5">
            <h4 className="our-project-title w-100 d-flex justify-content-end">نبذة من اعمالنا</h4>
            <div className="d-flex w-75 justify-content-end">
              <h6 className="showMore">عرض الكل</h6>
              <IoIosArrowBack size="20px" />
            </div>
          </div>
          <DescriptionWithImage
            serviceType="برمجة موقع نمو المنشئات"
            serviceExample="مشروع : موقع نمو المنشآت"
            servicePart="التصنيف : برمجة مواقع الويب"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/web-develop.png")}
          />
          <DescriptionWithImage
            serviceType="برمجة تطبيق موسيقى"
            serviceExample="مشروع : تطبيق  سوشيال ميديا موسيقية"
            servicePart="التصنيف : برمجة تطبيقات الجوال"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/mobile-develop.png")}
          />
          <DescriptionWithImage
            serviceType="تصميم وتحريك فيديو موشن جرافيك"
            serviceExample="مشروع :  فيديو موشن للبنك الوطني الإسلامي"
            servicePart="التصنيف : موشن جرافيك"
            date="التاريخ : 11/2/2020"
            description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،  النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
          ، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          "
            img={require("../../../constant/images/motion-graphic.png")}
          />
        </div>
      </div>
      <OurMission />
      <div className="container d-flex my-4">
        <div className="col-12 col-lg-4 col-md-6">
          <CardWithButton
            img={require("../../../constant/images/card-image1.png")}
            cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
          />
        </div>
        <div className="col-12 col-lg-4 col-md-6">
          <CardWithButton
            img={require("../../../constant/images/card-image2.png")}
            cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
          />
        </div>
        <div className="col-12 col-lg-4 col-md-6">
          <CardWithButton
            img={require("../../../constant/images/card-image3.png")}
            cardTitle="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
            cardDetials="ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج ثورة الهواتف القابلة للطي  Z Flip هاتف سامسونج"
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
