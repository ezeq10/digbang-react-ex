import React, { useState } from 'react'
import CreditForm from '../components/sections/credit/CreditForm'

const CreditSimulator = () => {
  const [amount, setAmount] = useState(19000);
  const [term, setTerm] = useState(16);
  const [total, setTotal] = useState(0);

  const calculate = () => {

    
  }

  return (
    <>
      <h1 className="title">Simulá tu crédito</h1>
      <CreditForm 
        amount={amount}
        term={term}
        onAmountChange={calculate}
        onTermChange={calculate}
      />
    </>
  )
}

export default CreditSimulator