import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
        {/* <h1>Home Page</h1>
        This is Home */}
        <div className="banner">
          <h1>
            Welcome to Flavr - 
            <br />Your <span>Culinary</span> Adventure Awaits!
          </h1>
          <img src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg" alt="" />
        </div>
    </div>
  )
}

export default Home