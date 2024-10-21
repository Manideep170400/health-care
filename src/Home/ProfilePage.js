import React from "react";

function ProfilePage() {
  return (
    <div className="header">
      <div className="App">
        <img
          src="/assests/TestLogo.svg"
          alt="Tech.care"
          style={{ paddingRight: "224px", paddingTop: "24px" }}
        />
      </div>
      <div className="header">
        <span class="material-symbols-outlined">home</span>
        <p>overview</p>
      </div>
      <div className="header">
        <span class="material-symbols-outlined">contacts_product</span>
        <p>patients</p>
      </div>
      <div className="header">
        <span class="material-symbols-outlined">event</span>
        <p>Schedule</p>
      </div>
      <div className="header">
        <span class="material-symbols-outlined">mms</span>
        <p>message</p>
      </div>
      <div className="header">
        <span class="material-symbols-outlined">credit_card</span>
        <p>Transaction</p>
      </div>
      <div>
        <div className="right__header">
          <div style={{ paddingTop: "28px" }}>
            <img src="/assests/doctor.png" alt="doctor" />
          </div>
          <div>
            <p>DR.Jose Simmons</p>
            <p style={{ backgroundColor: "light grey" }}>
              General Practitioner
            </p>
          </div>
          <div style={{ paddingTop: "28px" }}>
            <span class="material-symbols-outlined">settings</span>
            <span class="material-symbols-outlined">more_vert</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
