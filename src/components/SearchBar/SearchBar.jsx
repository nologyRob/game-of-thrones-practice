import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const {handleInput} = props;
  
  return (
    <div>
      <input className='input' type="text" onChange={handleInput} placeholder="Search"/>
    </div>
  )
}

export default SearchBar