import React from "react";
import "./App.css";
import Index from "./components/pages/home/home";
import ProjectDetails from "./components/pages/projectDetails/projectDetails";
import BlogDetails from './components/pages/BlogDetails/BlogDetails'
import OurProject from "./components/pages/OurProject/OurProject";
import Specialize from "./components/Specialize-us/Specialize-us";
import OurService from './components/pages/OurService/ourService';
import Blog from './components/pages/Blog/Blog'
import { Route } from 'react-router-dom'
// import useSticky from './hooks/useSticky'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/navbar/navbar";
function App() {
  AOS.init();
  // const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <Route exact path='/' component={Index} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blogDetails' component={BlogDetails} />
      <Route exact path='/ourProject' component={OurProject} />
      <Route exact path='/ourService' component={OurService}/>
      <Route exact path='/projectDetails' component={ProjectDetails}/>
    </div>
  );
}

export default App;
