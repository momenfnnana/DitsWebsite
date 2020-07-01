import React from "react";
import "./Blog.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

  const slider = (
    <AwesomeSlider className="fullSlider">
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

const Blog = () => {
  return (
    <div>
      {/* <h1>Blog screen</h1> */}
      {slider}
    </div>
  );
};
export default Blog;
