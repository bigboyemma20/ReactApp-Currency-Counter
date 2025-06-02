export interface Denomination {
  value: number;
  name: string;
  quantity: number;
}

export interface DenominationInput {
  denomination: Denomination;
  onChange: (quantity: number) => void;
}
