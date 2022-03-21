import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./stylesheets/main.scss";

import { TransactionsProvider } from "./context/TransactionContext";

ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById("root")
);
