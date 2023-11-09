import React from "react";
import PropTypes from "prop-types";
import Amount from "./Amount";
import Term from "./Term";

const CreditForm = ({
  totalAmount,
  term,
  onTotalAmountChange,
  onTermChange,
}) => {
  const totalAmountMinValue = 5000;
  const totalAmountMaxValue = 50000;
  const totalAmountStep = 500;

  const termMinValue = 3;
  const termMaxValue = 24;
  const termStep = 1;

  return (
    <div style={{ marginTop: 55 }}>
      <Amount
        label="Monto total"
        value={totalAmount}
        onChange={onTotalAmountChange}
        min={totalAmountMinValue}
        max={totalAmountMaxValue}
        step={totalAmountStep}
      />
      <Term
        label="Plazo"
        value={term}
        onChange={onTermChange}
        min={termMinValue}
        max={termMaxValue}
        step={termStep}
      />
    </div>
  );
};

CreditForm.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  onTotalAmountChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
};

export default CreditForm;
