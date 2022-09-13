import React from 'react'
import "./Slider.scss"

const Slider = (props) => {
  const { setValue } = props;

  const getSliderValue = (event) => {
    setValue(event.target.value)
  }


  
  return (
    <div>
      <input type="range" className="slider" onClick={getSliderValue}/>
    </div>
  )
}

export default Slider