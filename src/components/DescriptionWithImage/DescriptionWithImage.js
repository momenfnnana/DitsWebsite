import React from "react";
import "./DescriptionWithImage.css";
import { MdContentCopy, MdDateRange } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const DescriptionWithImage = ({
  serviceType,
  serviceExample,
  servicePart,
  date,
  description,
  img
}) => {
  return (
    <div className="row mb-5">
      <div className="d-flex flex-column justify-content-center col-12 col-lg-6 order-2 order-lg-1">
        <h4 className="title-for-service d-flex px-3">{serviceType}</h4>
        <div className="mx-3 mt-3">
          <div className="d-flex iconWithTitle">
            <AiOutlineFundProjectionScreen
              size="24px"
              color="#2364D8"
              className="mx-2"
            />
            <p className="list">{serviceExample}</p>
          </div>
          <div className="d-flex iconWithTitle">
            <MdContentCopy size="24px" color="#2364D8" className="mx-2" />
            <p className="list">{servicePart}</p>
          </div>
          <div className="d-flex iconWithTitle">
            <MdDateRange size="24px" color="#2364D8" className="mx-2" />
            <p className="list">{date}</p>
          </div>
          <p className="description">{description}</p>
          <div className="button d-flex">
            <button
              type="button"
              class="btn btn-primary rounded-pill px-4 details-button"
            >
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 order-1 order-lg-2">
        <img src={img} style={{ objectFit: "cover", width: "100%" }} />
      </div>
    </div>
  );
};
export default DescriptionWithImage;
