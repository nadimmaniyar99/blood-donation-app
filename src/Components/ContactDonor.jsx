import React, { useState } from 'react';
import './ContactDonor.css';

const ContactDonor = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleCallClick = () => {
    setShowNumber(prev => !prev); // Toggle visibility
  };

  return (
    <div className="contact-container">
      <h2>Contact Donor</h2>

      <button className="btn call-btn" onClick={handleCallClick}>
        📞 {showNumber ? 'Call Donor' : 'Call Donor'}
      </button>

      {showNumber && (
        <div className="phone-number">
          📱 Donor's Number: <strong>+1 (555) 123-4567</strong>
        </div>
      )}

      <button className="btn message-btn">💬 Send Message</button>

      <div className="messages">
        <h3>Recent Messages</h3>

        <div className="message left">
          <div className="avatar">JD</div>
          <div className="text">I'm on my way to the hospital. Should arrive in about 18 minutes.</div>
        </div>

        <div className="message right">
          <div className="text reply">Thank you! We'll be waiting at the entrance.</div>
          <div className="avatar">You</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDonor;
