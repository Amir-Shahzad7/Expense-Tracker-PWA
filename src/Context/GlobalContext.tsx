import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { TransactionType, initialStateType } from "../Types/ExpenseTrackerTypes";

//Initial State

const initialState: initialStateType = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Delete Action
  function deleteTransaction(id: number) {
    dispatch({
      type: "DeleteTransaction",
      payload: id,
    });
  }

  //Add Action
  function addTransaction(transaction: TransactionType) {
    dispatch({
      type: "AddTransaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
