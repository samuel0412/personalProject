import React from "react";
import "./App.css";
const App = () => {
  const dropDownToggle = () => {
    const dropDownListSec = document.querySelector(".dropDownListSec");
    dropDownListSec.classList.toggle("open");
  };
  return (
    <>
      <div className="mainSec">
        <div className="dropDownListSec" onClick={dropDownToggle}>
          <span className="dropDownHeaderText">Dropdown list</span>
          <span className="dropDownHeaderIcon">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <div className="dropDownList">
          <ul>
            <li>Number</li>
            <li>String</li>

            <li>Null</li>
            <li>Boolean</li>
            <li>Array</li>
            <li>Object</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
