import React from "react";
import PropTypes from "prop-types";

const CreditInput = ({ label, value, onChange }) => {
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
        />
      </div>
    </div>
  );
};

CreditInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CreditInput;
