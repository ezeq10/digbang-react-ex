import React from 'react'
import CreditInput from './CreditInput'
import Slider from '../../common/Slider'

const Term = ({ label, value, onChange, min, max, step }) => {
  return (
    <div>
      <CreditInput label={label} value={value} onChange={onChange} />
      <Slider value={value} onChange={onChange} min={min} max={max} step={step} />
    </div>
  )
}

export default Term