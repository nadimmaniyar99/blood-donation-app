import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-circle" />
        <span className="logo-text">Priority Donor Club</span>
      </div>
      <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Donate</li>
        <li className="nav-item">Request</li>
         <li className="nav-item">Track</li>
        <li className="nav-item">Rewards <span className="dropdown-arrow">▼</span></li>
      </ul>
    </nav>
      <button className="login-button">
        <span className="login-icon">⇨</span> Login
      </button>
    </header>
  );
}
