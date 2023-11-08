import React, { useState, useEffect } from "react";
import CreditForm from "../components/sections/credit/CreditForm";

const CreditSimulator = () => {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const monthlyInterestRate = 0.05 / 12; // 5% annual interest rate
    const numPayments = term;
    const numerator = amount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numPayments);
    const monthlyPayment = numerator / denominator;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }, [amount, term]);

  return (
    <>
      <h1 className="title">Simulá tu crédito</h1>
      <CreditForm
        amount={amount}
        term={term}
        onAmountChange={setAmount}
        onTermChange={setTerm}
      />
      <div className="container">
        <div className="box">Cuota fija por mes</div>
        <div className="box">$ {monthlyPayment}</div>
      </div>
      <div className="container">
        <div className="box">
          <button>Obtené Crédito</button>
        </div>
        <div className="box">
          <button>Ver detalle de cuotas</button>
        </div>
      </div>
    </>
  );
};

export default CreditSimulator;
