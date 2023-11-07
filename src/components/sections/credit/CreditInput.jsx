import React from 'react'

const CreditInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export default CreditInput