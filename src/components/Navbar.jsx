import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='Maindiv'>
            <ul>
                <div className='nav-logo'>
                    <li className='nav-item'>Flavr</li>
                </div>
                <Link to="/">
                    <li className='nav-item'>HOME</li>
                </Link>
                <Link to="/explore">
                    <li className='nav-item'>EXPLORE</li>
                </Link>

                <Link to="/upload">
                    <li className='nav-item' id='upload'> + UPLOAD</li>
                </Link>
            </ul>
            <div className="profile">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg" alt="Profile" className='profile-img' />
                <div className='profile-name'>User</div>
            </div>

        </div>
    </div>
  )
}

export default Navbar