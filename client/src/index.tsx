import React from "react";
import ReactDOM from "react-dom";
import { TransactionsProvider } from "./context/TransactionContext";
import { AppProvider } from "./context/AppContext";
import App from "./App";

import "./stylesheets/main.scss";

ReactDOM.render(
  <TransactionsProvider>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </TransactionsProvider>,
  document.getElementById("root")
);
