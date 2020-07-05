import React from "react";
import "./headingLine.scss";
const HeadingLine = (props) => {
  return <h4 className={[`titleHeading d-flex px-3 ${props.className}`]}>{props.title}</h4>
};

export default HeadingLine;
