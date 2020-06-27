import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className='card col-4'>
      <img
        src={require("../../../constant/images/Card-Ads1.svg")}
        alt="card-image"
      />
      <h4 className='my-2'>تصميم واجهات وتجربة المستخدم</h4>
      <p>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد{" "}
      </p>
    </div>
  );
};
export default Card;
