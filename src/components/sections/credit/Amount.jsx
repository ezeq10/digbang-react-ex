import React from "react";
import PropTypes from "prop-types";
import CreditInput from "./CreditInput";
import Slider from "./../../common/Slider";

const Amount = ({ label, value, onChange, min, max, step }) => {
  return (
    <>
      <CreditInput
        label={label}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      <div className="container">
        <div className="box">
          <Slider
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
          />
        </div>
      </div>
    </>
  );
};

Amount.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Amount;
