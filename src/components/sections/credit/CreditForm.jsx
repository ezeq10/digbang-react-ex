import React from "react";
import PropTypes from "prop-types";
import Amount from "./Amount";
import Term from "./Term";

const CreditForm = ({ amount, term, onAmountChange, onTermChange }) => {
  return (
    <>
      <Amount
        label="Monto total"
        value={amount}
        onChange={onAmountChange}
        min={1000}
        max={50000}
        step={1000}
      />
      <Term
        label="Plazo"
        value={term}
        onChange={onTermChange}
        min={12}
        max={60}
        step={12}
      />
    </>
  );
};

CreditForm.propTypes = {
  amount: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
};

export default CreditForm;
