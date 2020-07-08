import React from 'react'
import "./OurProject.scss"
import ServiceDescription from "../../service-description-with-image/ServiceDescription";
import Card from "../../cards/card-with-title/Card-with-title";
import Navbar from '../../navbar/navbar';
const OurProject = () => {
    return (
        <div dir="rtl" className="container">
            <Navbar sticky={true} />
            <ServiceDescription
                className1="col-lg-6 order-2 order-lg-1"
                className2="col-lg-6 order-1 order-lg-2 d-flex justify-content-center"
                title="برمجة مواقع الويب"
                subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                img={require("../../../constant/images/descripe-web-development.svg")}
            />
            <div className="row mt-5">
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/Desktop-Mock-up-1.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/web-develop.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/wordDevelopment.svg")}
                        title="برمجة موقع ورد"
                    />
                </div>
            </div>
            <ServiceDescription
                className1="col-lg-6 order-2 order-lg-1"
                className2="col-lg-6 order-1 order-lg-2 d-flex justify-content-center"
                title="برمجة تطبيقات الجوال"
                subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                img={require("../../../constant/images/descripe-mobile-development.svg")}
            />
            <div className="row mt-5">
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/Desktop-Mock-up-1.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/web-develop.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/wordDevelopment.svg")}
                        title="برمجة موقع ورد"
                    />
                </div>
            </div>
            <ServiceDescription
                className1="col-lg-6 order-2 order-lg-1"
                className2="col-lg-6 order-1 order-lg-2 d-flex justify-content-center"
                title="تصميم واجهات وتجربة المستخدم"
                subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                img={require("../../../constant/images/descripe-ui-ux-development.svg")}
            />
            <div className="row mt-5">
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/Desktop-Mock-up-1.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/web-develop.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/wordDevelopment.svg")}
                        title="برمجة موقع ورد"
                    />
                </div>
            </div>
            <ServiceDescription
                className1="col-lg-6 order-2 order-lg-1"
                className2="col-lg-6 order-1 order-lg-2 d-flex justify-content-center"
                title="موشن جرافيك"
                subTitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                "
                img={require("../../../constant/images/descripe-moshin-graphic-development.svg")}
            />
            <div className="row mt-5">
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/Desktop-Mock-up-1.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/web-develop.svg")}
                        title="برمجة موقع نمو المنشئات"
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                    <Card
                        img={require("../../../constant/images/wordDevelopment.svg")}
                        title="برمجة موقع ورد"
                    />
                </div>
            </div>
        </div>
    )
}
export default OurProject;