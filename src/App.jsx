import React from "react";
import "./App.css";
import Dashboard from "./assets/Dashboard.png";
import Header from "./assets/Header.jpg";
import Graphs from "./assets/Graphs.jpg";
import Frame from "./assets/Frame 36.jpg";
import History from "./assets/History.jpg";
import Activity from "./assets/Activity.png";
import Quiz from "./assets/Quiz.png";
import Training from "./assets/Training.png";
const App = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <img src={Dashboard} alt="" />
      </div>
      <div className="right-container">
        <div className="right-container-top">
          <img src={Header} alt="" />
          <img src={Graphs} alt="" />
        </div>
        <div className="right-container-1">
          <img src={Frame} alt="" className="image1" width={"280px"} />
          <img src={History} alt="" className="image2" width={"880px"} />
        </div>
        <div className="right-container-2">
          <img src={Activity} alt="" />
          <img src={Quiz} alt="" />
          <img src={Training} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
