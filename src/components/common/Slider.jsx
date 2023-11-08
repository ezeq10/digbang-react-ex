import React from "react";
import PropTypes from "prop-types";
import { default as RCSlider } from "rc-slider";
import "rc-slider/assets/index.css";

const Slider = ({ value, onChange, min, max, step }) => {
  return (
    <RCSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
