import React from "react";
import PropTypes from "prop-types";
import CustomNumericInput from "../../common/CustomNumericInput";
import CustomSlider from "../../common/CustomSlider";

const Amount = ({ label, value, onChange, min, max, step }) => {
  return (
    <>
      <div className="container">
        <div className="box label-box">
          <label className="input-label">{label}</label>
        </div>
        <div className="box input-box">
          <CustomNumericInput
            value={value}
            onChange={onChange}
            prefix="$"
            min={min}
            max={max}
          />
        </div>
      </div>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="box" style={{ maxWidth: 356 }}>
          <CustomSlider
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            markFormat={"$"}
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
