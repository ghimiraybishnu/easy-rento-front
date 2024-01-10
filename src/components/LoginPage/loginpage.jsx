// App.js

import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginVisible, setLoginVisible] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email and password here (you can add more complex validation)

    // Email validation: must start with an alphabet
    const emailRegex = /^[a-zA-Z].*/;
    const isEmailValid = emailRegex.test(email);

    // Password validation: minimum 3 digits, maximum 8 digits
    const isPasswordValid = password.length >= 3 && password.length <= 8;

    if (isEmailValid && isPasswordValid) {
      // Perform login actions (e.g., API call)
      // For simplicity, just alert the login details in this example
      alert(`Logged in with Email: ${email}, Password: ${password}`);
      // You might want to redirect the user or update the state upon successful login
      // onLogin();
    } else {
      // Handle invalid login attempt and display error messages
      if (!isEmailValid) {
        setEmailError('Please enter a valid Email starting with an alphabet.');
      }
      if (!isPasswordValid) {
        setPasswordError('Please enter a Password between 3 and 8 characters.');
      }
    }
  };
  return (
    <div className={`modal ${loginVisible ? 'show' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={(e) => setLoginVisible(! loginVisible)}>&times;</span>
      <h2>Login</h2>
      <form>

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className='${emailError} ? validationErr'>{emailError}</span>

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span class="validationErr">{passwordError}</span>

          <button type="button" onClick={handleLogin}>
            Login
          
        </button>
        <div className="flex">
        <Link to="/register">SignUp</Link>
        </div>
        </form>
      </div>
    </div>
  );
};


export default  LoginPage;
