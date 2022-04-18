import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <div className='app__header'>
        <div className='app__header-desc'>
            <div className='header__desc'>
                <p>Calling the World's Top deptrai boi</p>
                <h1>
                    DepTrai Nations Gogo
                </h1>
                <h3>May 15th - July 16th, 2022</h3>
                <h4>Opening up a whole new world of deptraicogisai.</h4>
                <p>Deptrai, Hocgioi, Nhagiau va Provip are revolutionizing the world of deptrai.</p>
                <p>Join global deptrai leaders at a new online hackathon!</p>
            </div>
            <div className='header__button'>
                <button className='header__button-hackathon'> HACKATHON </button>
                <button className='header__button-join'> JOIN US </button>
            </div>
        </div>
        <div className='app__header-img'>
            <img src="https://wallpapershome.com/images/wallpapers/ios-11-1920x1080-4k-5k-beach-ocean-13655.jpg" alt="" />
        </div>
    </div>
  )
}

export default Header