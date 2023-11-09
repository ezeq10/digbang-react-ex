import React from "react";
import PropTypes from "prop-types";
import { default as RCSlider } from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css";

const Slider = ({ value, onChange, min, max, step, useMarks, markFormat }) => {
  const formatMarkLabel = (value) => {
    return markFormat ? `${markFormat}${value}` : value;
  };

  const marks = useMarks
    ? {
        [min]: {
          label: <span className="custom-mark">{formatMarkLabel(min)}</span>,
        },
        [max]: {
          label: <span className="custom-mark">{formatMarkLabel(max)}</span>,
        },
      }
    : undefined;

  return (
    <RCSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      marks={useMarks ? marks : undefined}
    />
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  useMarks: PropTypes.bool,
  markFormat: PropTypes.string,
};

Slider.defaultProps = {
  useMarks: true,
  markFormat: null,
};

export default Slider;
