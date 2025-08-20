import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <h2>Ready to Save Lives?</h2>
      <p>
        Join thousands of donors who are making a difference every day. Start your journey with
        Priority Donor Club today.
      </p>
      <div className="cta-buttons">
        <button>Become a Donor</button>
        <button className="outline-btn">Get Started</button>
      </div>
    </section>
  );
}
