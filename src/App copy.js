import React from "react";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import { UserLogin } from "./Auth/UserLogin";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import { SecureRoute } from "./Route/SecureRoute";
const App = () => {
  const dropDownToggle = () => {
    const dropDownListSec = document.querySelector(".dropDownListSec");
    dropDownListSec.classList.toggle("open");
  };

  return (
    <>
      <div className="mainSec">
        <Home />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/" element={<SecureRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
