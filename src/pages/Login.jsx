import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="img-container">
          <img src="https://i.pinimg.com/564x/61/f1/f7/61f1f794186817faf10ff05b536244b2.jpg" alt="Flavr Logo" className="logo" />
        </div>
        <div className="login">
          <h1>Login</h1>
          <p>Welcome back! <br />Please enter your details.</p>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="A Sweet Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>Login</button>

          {error && <p className="error">{error}</p>}

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
