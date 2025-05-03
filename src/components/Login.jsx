import React, {useState} from 'react'
import image from '../assets/left-panel-img.jpg'
import Signin from './Signin'
import './Signin.css'
const Login = () => {
  const [login, setLogin] = useState(false)
  if (login){
    return <Signin />
  }
    return (
        <div className='sign-in-body'>
          <div className='left-panel'>
          <h1>Flavr</h1>
          <img src={image} alt="" />
          <p>Cook. Share. Connect</p>
    
          </div>
            <div className='sign-in-container'>
              <h2>Flavr</h2>
              <p>Cook. Share. Connect.</p>
    
              <label>Email</label>
              <br />
              <input type="email" />
              <br />
    
              <label htmlFor="">Password</label>
              <br />
              <input type="password"/>
              <br />
    
              <label htmlFor="">Confirm Password</label>
              <br />
              <input type="password"/>
              <br />
    
              <button>Login</button>
                <p className='login'>Don't have an Account? <span onClick = {()=>{
                  setLogin(true)
                }}>Sign Up</span></p>
            </div>
    
        </div>
      )
}

export default Login