import React from 'react'
import "./Nav.scss"
import logo from "../../assets/images/logo.png"

const Nav = () => {
  return (
    <div className='nav'>
      
      <img className='nav__logo' src={logo} alt="GOT-logo" />
    </div>
  )
}

export default Nav