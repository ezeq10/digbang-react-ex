import React from 'react'
import { default as RCSlider } from 'rc-slider'
import 'rc-slider/assets/index.css'

const Slider = ({ value, onChange, min, max, step }) => {
  return (
    <div>
      <p>{value}</p>
      <RCSlider min={min} max={max} step={step} value={value} onChange={onChange} />
    </div>
  )
}

export default Slider