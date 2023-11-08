import React from "react";
import PropTypes from "prop-types";

const CreditInput = ({ label, value, onChange, min, max }) => {
  return (
    <div className="container">
      <div className="box">
        <label>{label}</label>
      </div>
      <div className="box">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};

CreditInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CreditInput;
