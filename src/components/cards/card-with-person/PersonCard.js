import React from "react";
import "./PersonCard.css";
import { AiFillStar } from "react-icons/ai";

const PersonCard = ({
  img,
  name,
  description,
  color1,
  color2,
  color3,
  color4,
  color5,
}) => {
  return (
    <div className="shadow position-relative full-card my-5">
      <div className="d-flex justify-content-center header-card">
        <div className="d-flex image-container justify-content-center rounded-circle">
          <img src={img} alt="person" />
        </div>
      </div>
      <div className="body-card pb-1 px-1">
        <div className="mb-2">
          <AiFillStar size="20px" color={color1} />
          <AiFillStar size="20px" color={color2} />
          <AiFillStar size="20px" color={color3} />
          <AiFillStar size="20px" color={color4} />
          <AiFillStar size="20px" color={color5} />
        </div>
        <h5 className="name">{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default PersonCard;
