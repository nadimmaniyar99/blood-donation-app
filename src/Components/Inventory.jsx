import React, { useState } from "react";
import "./Inventory.css";

export default function Inventory() {
  const [loaded, setLoaded] = useState(false);

  const loadData = () => {
    setLoaded(true);
    // Ideally fetch actual data here
  };

  return (
    <section className="inventory-section">
      <div className="inventory-header">
        <h2>Current Blood Inventory</h2>
        <button onClick={loadData}>Load Inventory</button>
      </div>
      <div className="inventory-box">
        {loaded ? (
          <p>📊 Blood inventory data would appear here...</p>
        ) : (
          <p>Click the button above to load the latest blood inventory data</p>
        )}
      </div>
    </section>
  );
}
