import React from 'react'
import "./Slider.scss"

const Slider = (props) => {
  const { getSliderValue } = props;

  
  return (
    <div>
      <input type="range" className="slider" onClick={getSliderValue}/>
    </div>
  )
}

export default Slider