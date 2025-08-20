import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Enter your email and password to sign in</p>
      
      <form className="login-form">
        <label>Email</label>
        <div className="input-group">
          <span className="icon">@</span>
          <input type="email" placeholder="name@example.com" required />
        </div>

        <div className="password-label-group">
          <label>Password</label>
          <a href="#">Forgot password?</a>
        </div>
        <div className="input-group">
          <input 
            type={showPassword ? 'text' : 'password'} 
            required 
          />
          <span 
            className="icon clickable" 
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        <button className="sign-in-btn" type="submit">
          <span className="btn-icon">➡️</span> Sign In
        </button>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
