import React from 'react';
import './Track.css';

export default function DonationTracker() {
  return (
    <div className="tracker-container">
      <h1 className="tracker-title">Track Donation</h1>

      <div className="status-card">
        <div className="status-header">
          <span className="status-label">Donation Status</span>
          <span className="status-badge">Donor Arrived</span>
        </div>

        <div className="status-bar">
          <div className="status-bar-progress"></div>
        </div>

        <div className="status-steps">
          {["Confirmed", "En Route", "Arrived", "Donating", "Completed"].map((label, i) => (
            <div key={i} className="status-step">
              <div className={`step-circle ${i < 3 ? 'step-active' : ''}`}>{i + 1}</div>
              <div className="step-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tab-container">
        {['Map View', 'Details', 'Contact'].map((tab, i) => (
          <button key={i} className={`tab-button ${i === 0 ? 'tab-active' : ''}`}>{tab}</button>
        ))}
      </div>

      <div className="map-container">
        <div className="loader"></div>
      </div>

      <div className="eta-container">
        <div>⏱ ETA: 0 min</div>
        <div>📍 Donor has arrived</div>
      </div>

      <div className="action-buttons">
        <button className="manual-button">Complete Manually</button>
        <button className="report-button">Report Issue</button>
      </div>
    </div>
  );
}
