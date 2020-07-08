import React from 'react'
import "./BlogDescription.scss"
const BlogDescription = () => {
    return (
        <div className="contianer" dir="rtl">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column my-3">
                    <h2 className="text-center text-md-right">تويتر تُوقف ميزة التنبيه بالتغريدات
عبر الرسائل النصية القصيرة SMS</h2>
                    <div className="d-flex flex-row align-self-center align-self-md-start">
                        <img 
                        width="30%"
                        src={require('../../constant/images/presonal-pic.svg')}
                        />
                        <div className="d-flex flex-column justify-content-center mr-3 align-items-start">
                            <p className="m-0">سارة محمد حسن</p>
                            <p className="date m-0"><small>Nov 14, 2020 </small></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2 my-3">
                    <img
                        className="image"
                        src={require('../../constant/images/blog-description.svg')}
                    />
                </div>
            </div>
        </div>
    )
}
export default BlogDescription