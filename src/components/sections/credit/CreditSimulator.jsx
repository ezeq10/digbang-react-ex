import React, { useState, useEffect } from "react";
import CreditForm from "./CreditForm";
import "./style.css";

const CreditSimulator = () => {
  const [totalAmount, setTotalAmount] = useState(5000);
  const [term, setTerm] = useState(3);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const monthlyInterestRate = 0.05 / 12; // 5% annual interest rate

  useEffect(() => {
    const numPayments = term;
    const numerator = totalAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numPayments);
    const monthlyPayment = numerator / denominator;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }, [totalAmount, term]);

  return (
    <div className="credit-simulator-container">
      <h2 className="title">Simulá tu crédito</h2>
      <CreditForm
        totalAmount={totalAmount}
        term={term}
        onTotalAmountChange={setTotalAmount}
        onTermChange={setTerm}
      />
      <div className="container monthly-payment-container">
        <div className="box">Cuota fija por mes</div>
        <div className="box" style={{ fontSize: 36 }}>$ {monthlyPayment}</div>
      </div>
      <div className="container btn-container">
        <div style={{ width: 320, height: "inherit" }}>
          <button className="green-btn">Obtené Crédito</button>
        </div>
        <div style={{ height: "inherit" }}>
          <button className="blue-btn">Ver detalle de cuotas</button>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulator;
