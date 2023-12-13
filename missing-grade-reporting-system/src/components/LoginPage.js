import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="studentID">Student ID:</label>
          <input type="text" id="studentID" name="studentID" />

          <label htmlFor="pin">PIN:</label>
          <input type="password" id="pin" name="pin" />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;