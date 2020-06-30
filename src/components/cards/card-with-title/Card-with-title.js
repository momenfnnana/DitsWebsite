import React from "react";
import "./Card-with-title.css";
const Card = ({ img, title, subTitle }) => {
  return (
      <div className="d-flex justify-content-center align-items-center custome-card flex-column mx-1 row my-3">
        <img className="my-3" src={img} alt="ads" height="120px" style={{objectFit:"cover"}}/>
        <h4 className='card-title'>{title}</h4>
        <p className='mx-3'>{subTitle}</p>
      </div>
  );
};
export default Card;
