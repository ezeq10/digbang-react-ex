import React from "react";
import PropTypes from "prop-types";
import CreditInput from "./CreditInput";
import Slider from "../../common/Slider/Slider";

const Term = ({ label, value, onChange, min, max, step }) => {
  return (
    <>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="box">
          <label>{label}</label>
        </div>
        <div className="box">
          <CreditInput value={value} onChange={onChange} min={min} max={max} />
        </div>
      </div>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="box" style={{ maxWidth: 356 }}>
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

Term.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Term;
