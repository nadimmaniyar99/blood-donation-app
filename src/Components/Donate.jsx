import React, { useState } from "react";
import "./Donate.css";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Donate() {
  const [selectedBloodType, setSelectedBloodType] = useState("");

  return (
    <div className="donate-container">
      <h1>Donate Blood</h1>
      <div className="form1-card">
        <h2>Donation Registration</h2>
        <p>Please fill out this form to schedule your blood donation.</p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <div className="input-row">
          <div>
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input type="number" placeholder="Enter your weight in kg" />
          </div>
        </div>

        <label>Blood Type</label>
        <div className="blood-grid">
          {bloodTypes.map((type) => (
            <div
              key={type}
              className={`blood-card ${
                selectedBloodType === type ? "selected" : ""
              }`}
              onClick={() => setSelectedBloodType(type)}
            >
              <strong>{type}</strong>
              <span>Blood Type</span>
            </div>
          ))}
        </div>

        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}
