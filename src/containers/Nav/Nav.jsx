import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Nav.scss"
import logo from "../../assets/images/logo.png"

const Nav = (props) => {
  const {setSearchTerm} = props;

  return (
    <div className='nav'>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <img className='nav__logo' src={logo} alt="GOT-logo" />
    </div>
  )
}

export default Nav