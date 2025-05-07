import React from 'react'
import './Homepage.css'
import Post from './Post'

const Homepage = () => {

  return (
    <div className='body'>
      
        <div className='nav-bar'>
            <button className='create-post'>
                + Post
            </button>
        </div>

        <div className='container'>
        <div className='Left-panel'>
          <div className='home'>
            <img src="https://static.thenounproject.com/png/3574480-200.png" alt="" />
            Home
          </div>

          <div className='explore'>
            <img src="https://static-00.iconduck.com/assets.00/explore-icon-512x512-znt7vcm6.png" alt="" />
            <p>Explore</p>
          </div>

          <div className='notifications'>
            <img src="https://static-00.iconduck.com/assets.00/notification-icon-1845x2048-k24ddt5c.png" alt="" />
            <p>Notifications</p>
          </div>
        </div>
        <div className='content-container'>
        <Post />
        </div>
        </div>

        
    </div>
  )
}

export default Homepage