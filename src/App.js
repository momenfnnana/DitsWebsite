import React from "react";
import "./App.css";
import Index from "./components/pages/home/home";
import ProjectDetails from "./components/pages/projectDetails/projectDetails";
import BlogDetails from './components/pages/BlogDetails/BlogDetails'
import OurProject from "./components/pages/OurProject/OurProject";
import Specialize from "./components/Specialize-us/Specialize-us";
import OurService from './components/pages/OurService/ourService'
// import useSticky from './hooks/useSticky'

function App() {
  // const { isSticky, element } = useSticky()
  return (
    <div className="App">
      {/* <ProjectDetails /> */}
      <Index />
      {/* <OurService /> */}
      {/* <BlogDetails /> */}
      {/* <OurProject /> */}
      {/* <Specialize /> */}
    </div>
  );
}

export default App;
