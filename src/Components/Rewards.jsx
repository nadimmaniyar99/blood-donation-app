import React from "react";
import "./Rewards.css";

const rewards = [
  {
    title: "10% Pharmacy Discount",
    description: "10% off at partner pharmacies",
    points: 200,
    available: true,
    emoji: "💰",
  },
  {
    title: "Free Health Checkup",
    description: "Complete health screening at partner hospitals",
    points: 500,
    available: true,
    emoji: "🧑‍⚕️",
  },
  {
    title: "Priority Donor T-Shirt",
    description: "Exclusive donor club merchandise",
    points: 300,
    available: true,
    emoji: "🎁",
  },
  {
    title: "Hospital Cafeteria Voucher",
    description: "$10 voucher for hospital cafeterias",
    points: 100,
    available: true,
    emoji: "💰",
  },
  {
    title: "Premium Hospital Room Upgrade",
    description: "Free room upgrade during hospital stays",
    points: 1000,
    available: false,
    emoji: "💰",
  },
  {
    title: "Medical Transport Service",
    description: "Free medical transport service",
    points: 800,
    available: false,
    emoji: "🚑",
  },
];

const DonorRewards = () => {
  return (
    <div className="donor-container">
      <h1 className="donor-title">Priority Donor Club Rewards</h1>

      <div className="donor-card">
        <h2 className="donor-tier">Bronze Donor</h2>
        <p>5 donations • 750 reward points</p>
        <div className="donation-progress">
          <div className="donation-bar"></div>
        </div>
        <p className="donation-info">3 more donations until Silver Donor</p>
      </div>

      <div className="tab-section">
        <button className="tab active">Rewards</button>
        <button className="tab">Membership Tiers</button>
        <button className="tab">Donation History</button>
        <div className="points-display">750 Points Available</div>
      </div>

      <h3 className="rewards-heading">Available Rewards</h3>
      <div className="rewards-grid">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={`reward-card ${reward.available ? "" : "disabled"}`}
          >
            <div className="reward-header">
              <h4>{reward.title}</h4>
              <span className="reward-points">{reward.points} Points</span>
            </div>
            <p className="reward-description">
              {reward.emoji} {reward.description}
            </p>
            <button
              disabled={!reward.available}
              className={`redeem-button ${reward.available ? "" : "disabled"}`}
            >
              {reward.available ? "Redeem Reward" : "Not Enough Points"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorRewards;