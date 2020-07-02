import React from "react";
import "./PersonCard.scss";
import { AiFillStar } from "react-icons/ai";

const PersonCard = () => {
  return (
    <div className="container col-4 shadow position-relative my-5">
      <div className="d-flex justify-content-center header-card">
        <div className="d-flex image-container justify-content-center rounded-circle">
          <img
            src={require("../../../constant/images/face.svg")}
            alt="person"
          />
        </div>
      </div>
      <div className="body-card pb-1 px-1">
        <div className="mb-2">
          <AiFillStar size="20px" color="#ABBDBA" />
          <AiFillStar size="20px" color="#FCDD21" />
          <AiFillStar size="20px" color="#FCDD21" />
          <AiFillStar size="20px" color="#FCDD21" />
          <AiFillStar size="20px" color="#FCDD21" />
        </div>
        <h5 className="name">شركة الوئام للتجارة</h5>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
          النص من مولد النص العربى .{" "}
        </p>
      </div>
    </div>
  );
};
export default PersonCard;
