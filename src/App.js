import React from "react";
import "./App.css";
import Index from "./components/pages/home/home";
import ProjectDetails from "./components/pages/projectDetails/projectDetails";
import BlogDetails from './components/pages/BlogDetails/BlogDetails'
import OurProject from "./components/pages/OurProject/OurProject";
import OurService from './components/pages/OurService/ourService';
import Blog from './components/pages/Blog/Blog'
import { Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/footer/footer";
function App() {
  AOS.init();
  return (
    <div className="App">
      <Route exact path='/' component={Index} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blogDetails' component={BlogDetails} />
      <Route exact path='/ourProject' component={OurProject} />
      <Route exact path='/ourService' component={OurService}/>
      <Route exact path='/projectDetails' component={ProjectDetails}/>
      <Footer />
    </div>
  );
}

export default App;
