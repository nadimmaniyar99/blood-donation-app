import React from 'react';
import './Donorcard.css';

const DonorCard = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Donor Information</h2>
        <div className="donor-info">
          <div className="avatar" />
          <div className="details">
            <div className="name">John Doe</div>
            <div className="label">Gold Donor</div>
            <span className="blood-tag">A+</span>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">4.9 (36 donations)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Donation Details</h2>
        <div className="donation-details">
          <div><strong>Blood Type:</strong> <span className="right">A+</span></div>
          <div><strong>Units:</strong> <span className="right">1</span></div>
          <div><strong>Hospital:</strong> <span className="right">City General Hospital</span></div>
          <div><strong>Requested On:</strong> <span className="right">Today, 10:30 AM</span></div>
          <div><strong>Expected Completion:</strong> <span className="right">Today, 11:45 AM</span></div>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
