import React from "react";
import "./CardWithButton.css";

const CardWithButton = ({ img, cardTitle, cardDetials }) => {
  return (
    <div className="custome-card px-0">
      <img src={img} className="w-100 image-card" />
      <h1 className="card-title mt-3">{cardTitle}</h1>
      <p className="card-description my-4">{cardDetials}</p>
      <button
        type="button"
        class="btn btn-primary rounded-pill px-4 details-button mb-4"
      >
        قراءة المزيد
      </button>
    </div>
  );
};
export default CardWithButton;
