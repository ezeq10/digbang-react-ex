import React from "react";
import PropTypes from "prop-types";
import Amount from "./Amount";
import Term from "./Term";

const CreditForm = ({ totalAmount, term, onTotalAmountChange, onTermChange }) => {
  return (
    <>
      <Amount
        label="Monto total"
        value={totalAmount}
        onChange={onTotalAmountChange}
        min={5000}
        max={50000}
        step={500}
      />
      <Term
        label="Plazo"
        value={term}
        onChange={onTermChange}
        min={3}
        max={24}
        step={1}
      />
    </>
  );
};

CreditForm.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  onTotalAmountChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
};

export default CreditForm;
