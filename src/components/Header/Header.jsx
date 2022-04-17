import React, { useState} from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'

const Header = ({menuOpen, setMenuOpen}) => {


  return (
    <div className='app__header'>   
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='app__header-hackathon'>
            <div className='hackathon__title'>
                <h1>
                    PLASTIC ACTION'S HACKATHON
                </h1>
            </div>
            <div className='hackathon__subtitle'>
                <h3>
                    No plastic is fantastic
                </h3>
            </div>
            <div className='hackathon__desc'>
                <p>#plasticaction</p>
                <p>#vnuk</p>
            </div>
            <div className='hackathon__button'>
                <button className='button__register'>REGISTER</button>
                <button className='button__about'>ABOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Header