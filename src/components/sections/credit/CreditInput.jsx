import React from "react";
import PropTypes from "prop-types";

const CreditInput = ({ value, onChange, prefix = null, min, max }) => {
  return (
    <div className={`custom-number-input ${prefix ? 'with-prefix' : ''}`}>
      {prefix && <span className="prefix">{prefix}</span>}
      <input
        className={`credit-input ${prefix ? 'credit-input with-prefix-input' : ''}`}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        
      />
    </div>
  );
};

CreditInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CreditInput;
