import React from "react";
import "./Button.css";
const Button = ({title}) => {
  return (
    <button
      type="button"
      class="btn btn-primary rounded-pill px-4 details-button mb-4"
    >
      {title}
    </button>
  );
};
export default Button;
