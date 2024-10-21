import "./App.css";
import React from "react";
import ProfilePage from "./Home/ProfilePage.js";
import PatientInfo from "./Home/HealthCareDashboard.js";
function App() {
  return (
    <div>
      <div className="main__wrapper">
        <ProfilePage />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PatientInfo />
      </div>
    </div>
  );
}

export default App;
