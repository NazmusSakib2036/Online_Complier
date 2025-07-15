import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }


    console.log('Login attempt with:', { email, password });


    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password. Please try again.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nazmuss024@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link-text">
          Don't have an account? <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
