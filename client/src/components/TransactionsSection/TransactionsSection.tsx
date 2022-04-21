import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Types } from "../../context/reducers";
import Form from "../Form/Form";
import Transactions from "../Transactions/Transactions";
import "./TransactionsSection.scss";

interface TransactionsSectionProps {}

const TransactionsSection: React.FC<TransactionsSectionProps> = () => {
  const { state, dispatch } = useContext(AppContext);

  if (state.connectWalletModal) {
    return (
      <div
        className={`transactions-section grid grid--1x2 ${
          state.connectWalletModal ? "is-visible" : ""
        }`}
      >
        <span
          className="close-transactions"
          onClick={() => dispatch({ type: Types.connectWalletModalClose })}
        />
        <Form />
        <Transactions />
      </div>
    );
  }

  return null;
};

export default TransactionsSection;
