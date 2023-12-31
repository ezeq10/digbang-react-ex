import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const CustomNumericInput = ({ value, onChange, prefix = null, min, max }) => {
  return (
    <div className={`custom-numeric-input-container ${prefix ? 'with-prefix' : ''}`}>
      {prefix && <span className="prefix">{prefix}</span>}
      <input
        className={`custom-numeric-input ${prefix ? 'with-prefix-input' : ''}`}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        
      />
    </div>
  );
};

CustomNumericInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CustomNumericInput;