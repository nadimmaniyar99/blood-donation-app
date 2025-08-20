// Request.jsx
import React from 'react';
import './request.css';

export default function Request() {
  return (
    <div className="request-container">
      <h2>Request Blood</h2>
      <div className="form-card">
        <h3>Blood Request Form</h3>
        <p>Please fill out this form to request blood donation.</p>

        <label>Patient Name</label>
        <input type="text" placeholder="Enter patient's name" />

        <label>Hospital Name</label>
        <input type="text" placeholder="Enter hospital name" />

        <div className="form-row">
          <div>
            <label>Blood Type Needed</label>
            <div className="blood-types">
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                <button key={type} className="blood-btn">{type}</button>
              ))}
            </div>
          </div>

          <div>
            <label>Units Needed</label>
            <input type="number" placeholder="Enter number of units" />
          </div>
        </div>

        <label>Urgency Level</label>
        <div className="urgency-level">
          <label><input type="radio" name="urgency" /> <span className="red">Emergency</span> (Needed within hours)</label>
          <label><input type="radio" name="urgency" /> <span className="orange">Urgent</span> (Needed within 24 hours)</label>
          <label><input type="radio" name="urgency" /> <span className="gray">Scheduled</span> (Needed within days)</label>
        </div>

        <label>Delivery Location</label>
        <input type="text" placeholder="Enter delivery address" />

        <label>Additional Information (Optional)</label>
        <textarea placeholder="Enter any additional details that might help"></textarea>

        <button className="submit-btn">Find Donors</button>
      </div>
    </div>
  );
}
