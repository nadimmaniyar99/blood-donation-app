import React, { useState } from 'react';
import './Signup.css';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      <h2>Create an account</h2>
      <p>Enter your information to create an account</p>

      <form className="signup-form">
        <label>
          Full Name
          <input type="text" placeholder="John Doe" required />
        </label>

        <label>
          Email
          <div className="input-icon">
            <span className="icon">@</span>
            <input type="email" placeholder="name@example.com" required />
          </div>
        </label>

        <label>
          Password
          <div className="input-icon">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              minLength={8}
            />
            <span
              className="icon eye"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              👁️
            </span>
          </div>
          <small>Password must be at least 8 characters long</small>
        </label>

        <label>
          Blood Type
          <select required>
            <option value="">Select your blood type</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </label>

      <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" />
        <span>I agree to the terms and conditions</span>
      </label>
    </div>

        <button type="submit" className="signup-btn">
          👤 Sign Up
        </button>

        <p className="login-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
