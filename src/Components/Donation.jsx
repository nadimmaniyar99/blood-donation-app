import React from "react";
import "./Donation.css";

const DonationHistory = () => {
  const donations = [
    {
      date: "April 15, 2023",
      location: "City General Hospital",
      points: 20,
    },
    {
      date: "January 10, 2023",
      location: "Red Cross Blood Drive",
      points: 20,
    },
    {
      date: "October 5, 2022",
      location: "Community Medical Center",
      points: 10,
    },
    {
      date: "July 12, 2022",
      location: "University Hospital",
      points: 10,
    },
    {
      date: "March 21, 2022",
      location: "Downtown Blood Bank",
      points: 5,
    },
  ];

  return (
    <div className="container">
     

   

      <div className="card">
        <h2>Your Donation History</h2>
        {donations.map((donation, idx) => (
          <div className="donation-row" key={idx}>
            <div>
              <strong>{donation.date}</strong>
              <div>{donation.location}</div>
            </div>
            <div className="points">+{donation.points} pts</div>
          </div>
        ))}
        <div className="total">Total lifetime donations: {donations.length}</div>
      </div>
    </div>
  );
};

export default DonationHistory;
