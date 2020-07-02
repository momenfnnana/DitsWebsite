import React from "react";
import "./Button.scss";
const Button = ({title}) => {
  return (
    <button
      type="button"
      className="btn btn-primary rounded-pill px-4 details-button mb-4"
    >
      {title}
    </button>
  );
};
export default Button;
