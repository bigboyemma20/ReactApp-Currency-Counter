import React from "react";
import { DenominationInput as DenominationInputProps } from "../types/currency";

const DenominationInput: React.FC<DenominationInputProps> = ({
  denomination,
  onChange,
}) => {
  return (
    <div className="denomination-input">
      <label>
        {denomination.name} (${denomination.value.toFixed(2)})
        <input
          type="number"
          min="0"
          value={denomination.quantity}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="denomination-quantity"
        />
      </label>
      <div className="denomination-total">
        Total: ${(denomination.value * denomination.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default DenominationInput;
