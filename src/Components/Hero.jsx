import React from 'react';
import './Hero.css';
 // make sure the image is in src folder or adjust path accordingly

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${"https://templates.bwlthemes.com/blood_donation/v_2/images/home_1_slider_1.jpg"})` }}>
      <div className="overlay">
        <div className="hero-content">
          {/* <p className="tagline">Donate blood, save life!</p> */}
          <h1 className="main-heading">
         Donate Blood, Save Lives
          </h1>
          <p>Join Priority Donor Club and become part of a <br /> community that saves lives while earning rewards and <br />special benefits.</p>
          <div className="hero-buttons">
            <button className="donate-btn">DONATE NOW</button>
            <div className="call-box"><button>REQUEST BLOOD</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
