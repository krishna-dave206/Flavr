import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError('');

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home or dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="img-container">
          <img src="https://i.pinimg.com/564x/61/f1/f7/61f1f794186817faf10ff05b536244b2.jpg" alt="Flavr Logo" className="logo" />
        </div>
        <div className="signup">
          <h1>Sign Up</h1>
          <p>Create a new account! <br />Please fill in your details.</p>
          <br />
          <input type="text" placeholder="A Cheesy Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Your Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="A Sweet Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" className="input-field" value={confirm} onChange={(e) => setConfirm(e.target.value)} />

          <button className="signup-btn" onClick={handleSignup}>Sign Up</button>

          {error && <p className="error">{error}</p>}

          <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
