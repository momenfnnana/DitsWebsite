import React from "react";
import "./App.css";
import Index from "./components/pages/home/home";
import ProjectDetails from "./components/pages/projectDetails/projectDetails";

// import useSticky from './hooks/useSticky'

function App() {
  // const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <ProjectDetails />
    </div>
  );
}

export default App;
