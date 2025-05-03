import React, {useRef, useState} from 'react'
import './Signin.css'
import img from '../assets/left-panel-img.jpg'
import Login from './Login.jsx'
import Homepage from './Homepage.jsx'

const Signin = () => {
  const password1 = useRef();
  const password2 = useRef();
  const [click, setClick]  = useState(false)
  const [homepage, setHomepage] = useState(false)
  if (homepage){
    return <Homepage />
  }
  if (click){
    return <Login />
  }
  return (
    <div className='sign-in-body'>
      <div className='left-panel'>
      <h1>Flavr</h1>
      <img src={img} alt="" />
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
          <input type="password" ref={password1}/>
          <br />

          <label htmlFor="">Confirm Password</label>
          <br />
          <input type="password" ref={password2}/>
          <br />

          <button onClick={()=>{
            if(password1.current.value === password2.current.value){
              console.log("Signup successful")
              setHomepage(true)

            }
            else{
              alert("The passsword entered should be same. Check again.")
            }
          }}>Create Account</button>
            <p className='login'>Already have an Account? <span onClick={
              ()=>{setClick(true)}
            }>Login</span></p>
        </div>

    </div>
  )
}

export default Signin