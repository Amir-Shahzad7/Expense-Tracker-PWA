import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalContext";
import { getNotifications } from "./Services/Firebase";

const App = () => {
  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
