import React from 'react'
import './SliderFile.css'
export default function LabelSlider({Code,Start,End}) {
  return (
    <div className='LabelSlider' style={parseInt(Code) === Start || parseInt(Code) === End ? {display: 'flex'} : {display: 'none'}} >
        <p>${Code}</p>
        <div className='InnerArrow'></div>
    </div>
  )
}
