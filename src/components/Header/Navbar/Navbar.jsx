import React from 'react'
import image from '../../../constants/image'
import './Navbar.css'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className='app__header-nav '>
            <div className='nav__logo'>
                <img src={image.logo} alt="" />
            </div>
            <ul className='nav__links'>
                <li>
                    <a href=" ">CHALLENGES</a>
                </li>
                <li>
                    <a href=" ">PRIZES</a>
                </li>
                <li>
                    <a href=" ">SCHEDUEL</a>
                </li>
                <li>
                    <a href=" ">JUDGING CRITERIA</a>
                </li>
                <li>
                    <a href=" ">FAQS</a>
                </li>
            </ul>
            <div className='nav__register'>
                <button>REGISTER</button>
            </div>
            <div className={'nav__hamburger ' + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
            {menuOpen && (
                <div className='nav__hamburger-overlay'>
                    <ul className='nav__hamburger-links'>
                        <li>
                            <a href=" ">CHALLENGES</a>
                        </li>
                        <li>
                            <a href=" ">PRIZES</a>
                        </li>
                        <li>
                            <a href=" ">SCHEDUEL</a>
                        </li>
                        <li>
                            <a href=" ">JUDGING CRITERIA</a>
                        </li>
                        <li>
                            <a href=" ">FAQS</a>
                        </li>
                    </ul>
                    <div className='nav__register-small'>
                        <button>REGISTER</button>
                    </div>
                </div>
            )}
        </div>
  )
}

export default Navbar