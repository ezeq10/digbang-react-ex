import React from "react"
import Amount from './Amount'
import Term from './Term'

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
      <div className="container">
        <div className="box">
          <button>Obtené Crédito</button>
        </div>
        <div className="box">
          <button>Ver detalle de cuotas</button>
        </div>
      </div>
    </>
  )
}

export default CreditForm