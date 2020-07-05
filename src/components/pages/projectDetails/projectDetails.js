import React from "react";
import "./projectDetalis.scss";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";

const ProjectDetails = (props) => {
  return (
    <div dir="rtl">
      <Navbar sticky={true} />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
