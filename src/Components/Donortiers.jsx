import React from "react";
import "./Donortiers.css";

const tiers = [
  {
    name: "New Donor",
    donations: "0+ donations",
    benefits: [
      "Basic donation scheduling",
      "Donation certificate",
      "5 points per donation"
    ],
    status: "Locked",
    locked: true
  },
  {
    name: "Bronze Donor",
    donations: "3+ donations",
    benefits: [
      "All New Donor benefits",
      "10 points per donation",
      "Special thanks certificate",
      "Priority scheduling"
    ],
    status: "Current Tier",
    current: true
  },
  {
    name: "Silver Donor",
    donations: "8+ donations",
    benefits: [
      "All Bronze Donor benefits",
      "20 points per donation",
      "Free health checkup annually",
      "Hospital discounts",
      "Priority blood access"
    ],
    status: "Donate to Unlock",
    actionColor: "black"
  },
  {
    name: "Gold Donor",
    donations: "15+ donations",
    benefits: [
      "All Silver Donor benefits",
      "30 points per donation",
      "VIP hospital services",
      "Quarterly health checkups",
      "Emergency priority access",
      "Special recognition events"
    ],
    status: "Locked",
    locked: true
  }
];

const DonorCard = ({ tier }) => {
  return (
    <div className={`card ${tier.current ? "current" : tier.locked ? "locked" : "available"}`}>
      <div className="card-header">
        <h2>{tier.name}</h2>
        <span className="badge">{tier.donations}</span>
        {tier.current && <div className="ribbon">Current</div>}
      </div>
      <p className="subtitle">
        {tier.name === "New Donor"
          ? "Start your journey as a blood donor"
          : tier.name === "Bronze Donor"
          ? "Regular donor with basic benefits"
          : tier.name === "Silver Donor"
          ? "Frequent donor with enhanced benefits"
          : "Elite donor with premium benefits"}
      </p>
      <ul>
        {tier.benefits.map((benefit, i) => (
          <li key={i}>✓ {benefit}</li>
        ))}
      </ul>
      <button
        className="card-action"
        style={{ backgroundColor: tier.actionColor || (tier.current ? "#d60000" : "#e0e0e0") }}
        disabled={tier.locked}
      >
        {tier.status}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      {tiers.map((tier, index) => (
        <DonorCard tier={tier} key={index} />
      ))}
    </div>
  );
}
