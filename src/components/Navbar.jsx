import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='Maindiv'>
            <ul>
                <div className='nav-logo'>
                    <li className='nav-item'>Flavr</li>
                </div>
                <a href="/Flavr/">
                    <li className='nav-item'>HOME</li>
                </a>
                <li className='nav-item'>EXPLORE</li>
                <a href="/#/upload">
                    <li className='nav-item' id='upload'> + UPLOAD</li>
                </a>
            </ul>
            <div className="profile">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg" alt="Profile" className='profile-img' />
                <div className='profile-name'>Jason</div>
            </div>

        </div>
    </div>
  )
}

export default Navbar