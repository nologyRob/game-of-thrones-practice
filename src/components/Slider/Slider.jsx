import React from 'react'
import "./Slider.scss"

const Slider = (props) => {
  const {setLink, setValue} = props;

  const getSliderValue = (event) => {
    setLink(`https://api.gameofthronesquotes.xyz/v1/random/${event.target.value}`)
    setValue(event.target.value)
  }


  
  return (
    <div>
      <input type="range" className="slider" onClick={getSliderValue}/>
    </div>
  )
}

export default Slider