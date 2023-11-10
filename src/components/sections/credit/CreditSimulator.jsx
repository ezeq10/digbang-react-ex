import React, { useState, useEffect } from "react";
import CreditForm from "./CreditForm";
import CustomModal from "../../common/CustomModal";
import "./style.css";

const CreditSimulator = () => {
  const monthlyInterestRate = 0.05 / 12; // 5% annual interest rate
  const [totalAmount, setTotalAmount] = useState(5000);
  const [term, setTerm] = useState(3);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  useEffect(() => {
    const numPayments = term;
    const numerator = totalAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numPayments);
    const monthlyPayment = numerator / denominator;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }, [totalAmount, term]);

  const handleOpenSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleOpenDetailsModal = () => {
    setDetailModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setDetailModalOpen(false);
  };

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
        <div className="box" style={{ fontSize: 36 }}>
          $ {monthlyPayment}
        </div>
      </div>
      <div className="container btn-container">
        <div style={{ width: 320, height: "inherit" }}>
          <button className="green-btn" onClick={handleOpenSuccessModal}>
            Obtené Crédito
          </button>
        </div>
        <div style={{ height: "inherit" }}>
          <button className="blue-btn" onClick={handleOpenDetailsModal}>
            Ver detalle de cuotas
          </button>
        </div>
      </div>
      <CustomModal
        isOpen={isSuccessModalOpen}
        onRequestClose={handleCloseSuccessModal}
        contentLabel="Success Modal"
      >
        <div className="credit-simulator-modal-content">
          <h3>¡Crédito solicitado con éxito!</h3>
        </div>
      </CustomModal>
      <CustomModal
        isOpen={isDetailModalOpen}
        onRequestClose={handleCloseDetailsModal}
        contentLabel="Detail Modal"
      >
        <div className="credit-simulator-modal-content">
          <h3>Detalle de las cuotas</h3>
          <p>Monto total: {totalAmount}</p>
          <p>Número de cuotas: {term}</p>
          <p>Total por mes: {monthlyPayment}</p>
        </div>
      </CustomModal>
    </div>
  );
};

export default CreditSimulator;
