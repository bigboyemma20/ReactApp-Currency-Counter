import React, { useState } from "react";
import { Denomination } from "../types/currency";
import DenominationInput from "./DenominationInput";

const initialDenominations: Denomination[] = [
  { value: 200, name: "GH₵200 Note", quantity: 0 },
  { value: 100, name: "GH₵100 Note", quantity: 0 },
  { value: 50, name: "GH₵50 Note", quantity: 0 },
  { value: 20, name: "GH₵20 Note", quantity: 0 },
  { value: 10, name: "GH₵10 Note", quantity: 0 },
  { value: 5, name: "GH₵5 Note", quantity: 0 },
  { value: 2, name: "GH₵2 Note", quantity: 0 },
  { value: 1, name: "GH₵1 Note", quantity: 0 },
  { value: 2, name: "GH₵2 Coin", quantity: 0 },
  { value: 1, name: "GH₵1 Coin", quantity: 0 },
  { value: 0.5, name: "50 Pesewas", quantity: 0 },
  { value: 0.2, name: "20 Pesewas", quantity: 0 },
  { value: 0.1, name: "10 Pesewas", quantity: 0 },
];

const CurrencyCounter: React.FC = () => {
  const [denominations, setDenominations] =
    useState<Denomination[]>(initialDenominations);

  const handleQuantityChange = (index: number, quantity: number) => {
    const newDenominations = [...denominations];
    newDenominations[index] = {
      ...newDenominations[index],
      quantity: quantity,
    };
    setDenominations(newDenominations);
  };

  const totalAmount = denominations.reduce(
    (sum, denom) => sum + denom.value * denom.quantity,
    0
  );

  return (
    <div className="currency-counter">
      <h2>Ghana Cedi Counter</h2>
      <div className="denominations-container">
        {denominations.map((denomination, index) => (
          <DenominationInput
            key={denomination.name}
            denomination={denomination}
            onChange={(quantity) => handleQuantityChange(index, quantity)}
          />
        ))}
      </div>
      <div className="total-amount">
        <h3>Total Amount: GH₵{totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CurrencyCounter;
