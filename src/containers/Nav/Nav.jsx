import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Nav.scss"
import logo from "../../assets/images/logo.png"

const Nav = () => {
  return (
    <div className='nav'>
      <SearchBar />
      <img className='nav__logo' src={logo} alt="GOT-logo" />
    </div>
  )
}

export default Nav