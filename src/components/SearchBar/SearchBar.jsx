import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const {setSearchTerm} = props;

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div>
      <input className='input' type="text" onChange={handleInput} placeholder="Search"/>
    </div>
  )
}

export default SearchBar