export type initialStateType = {
  transactions: {
    id: number;
    text: string;
    amount: number;
  }[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionType) => void;
};

export type TransactionType = {
  id: number;
  text: string;
  amount: number;
};

export type TransactionPropType = {
  transaction: { id: number; text: string; amount: number };
};
