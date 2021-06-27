import { TransactionType } from "../Types/ExpenseTrackerTypes";

type Actions = 
| {type: "AddTransaction", payload: TransactionType}
| {type: "DeleteTransaction", payload: number}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: {transactions: TransactionType[];}, action: Actions) => {
    switch (action.type) {
      case "DeleteTransaction":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
      case "AddTransaction":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions],
        };
      default:
        return state;
    }
  };
  