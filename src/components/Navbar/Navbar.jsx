import React from 'react'
import image from '../../constants/image'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar section__padding'>
        <div className='app__navbar-logo'>
            <img src={image.logo} alt="" />
        </div>
        <div className='app__navbar-info'>
            <div className='app__navbar-links'>
                <ul className='navbar__links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Partners</li>
                    <li>Speaker</li>
                </ul>
            </div>
            <div className='app__navbar-button'>
                <button>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar