import React from "react";
import "./DescriptionWithImage.scss";
import { MdContentCopy, MdDateRange } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Button from "../button/Button";
import HeadinLine from "../heading-line/headingLine";

const DescriptionWithImage = ({
  headingLine,
  serviceExample,
  servicePart,
  date,
  description,
  img,
  classNameText,
  classNameImage,
  ImageAnimationDirection,
  textAnimationDirection
}) => {
  return (
    <div className="row mb-5">
      <div
        data-aos={textAnimationDirection}
        data-aos-duration="500"
        className={classNameText}>
        <HeadinLine title={headingLine} className="titleH" />
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
            <Button title="عرض التفاصيل" />
          </div>
        </div>
      </div>
      <div
        data-aos={ImageAnimationDirection}
        data-aos-duration="1300"
        className={classNameImage}>
        <img
          src={img}
          style={{ objectFit: "cover", width: "100%" }}
          alt="project-example"
        />
      </div>
    </div>
  );
};
export default DescriptionWithImage;
