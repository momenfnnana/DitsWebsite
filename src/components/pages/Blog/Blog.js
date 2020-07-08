import React from "react";
import "./Blog.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Navbar from "../../navbar/navbar";
import useSticky from "../../../hooks/useSticky";

const Blog = () => {
  const { isSticky, element } = useSticky();
  const slider = (
    <AwesomeSlider  ref={element} className="fullSlider">
      <div>
        <div className="image1"></div>
      </div>
      <div>
        <div className="image1"></div>
      </div>
      <div>
        <div className="image2"></div>
      </div>
    </AwesomeSlider>
  );
  return (
    <div>
      <Navbar sticky={isSticky} />
      {/* <h1>Blog screen</h1> */}
      {slider}
    </div>
  );
};
export default Blog;
