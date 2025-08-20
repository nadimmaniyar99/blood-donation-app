import React, { useState } from 'react';
import './Registration.css';

const DonationForm = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmed) {
      alert('Please confirm eligibility to donate blood.');
      return;
    }
    alert('Donation scheduled!');
    // Submit logic here
  };

  return (
    <div className="donation-form-container">
      <form className="donation-form" onSubmit={handleSubmit}>
        <h2>Donation Registration</h2>
        <p className="subtitle">Please fill out this form to schedule your blood donation.</p>

        <label>Last Donation Date (if applicable)</label>
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option value="">Select a date</option>
          <option value="2025-01-01">Jan 1, 2025</option>
          <option value="2025-03-01">Mar 1, 2025</option>
          <option value="None">Not Applicable</option>
        </select>

        <label>Your Location</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="confirm"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <label htmlFor="confirm">I confirm that I am in good health and eligible to donate blood</label>
        </div>

        <div className="button-group">
          <button type="button" className="back-button">Back</button>
          <button type="submit" className="submit-button">Schedule Donation</button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
