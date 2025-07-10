import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';


const Login = () => {
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
                <input type="text" placeholder=" A Cheesy Username" className="input-field" />
                <input type="password" placeholder="A Sweet Password" className="input-field" />
                <Link to="/">
                    <button className="login-btn">Login</button>
                </Link>
                <p className="signup-text">Don't have an account? <a href="/#/signup">Sign Up</a></p>
            </div>


        </div>
    </div>
  )
}
export default Login