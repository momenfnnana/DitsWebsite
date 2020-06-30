import React from "react";
import "./CardWithButton.css";
import Button from "../../button/Button";

const CardWithButton = ({ img, cardTitle, cardDetials }) => {
  return (
    <div className="custome-card px-0 my-3">
      <img src={img} className="w-100 image-card" alt="news"/>
      <h1 className="card-title mt-3">{cardTitle}</h1>
      <p className="card-description my-4">{cardDetials}</p>
      <Button title="قراءة المزيد"/>
    </div>
  );
};
export default CardWithButton;
