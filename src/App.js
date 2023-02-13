import React from "react";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import { UserLogin } from "./Auth/UserLogin";
import { Dashboard } from "./Dashboard/Dashboard";
import { Timesheet } from "./Dashboard/Pages/Timesheets/Timesheet";
import { Home } from "./Home/Home";
import { SecureRoute } from "./Route/SecureRoute";
const App = () => {
  return (
    <>
      <div className="mainSec">
        <Home />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/" element={<SecureRoute />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
