import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Transaction from "../Transaction/Transaction";
import "./Transactions.scss";

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="transactions">
      <div className="div">
        {currentAccount ? (
          <div className="transactionList">
            <h3 className="transactions--headline">Latest transactions</h3>
            {transactions.map((transaction: any, i: number) => (
              <Transaction key={i} {...transaction} />
            ))}
          </div>
        ) : (
          <h3 className="text">
            Connect your account to see the latest transactions
          </h3>
        )}
      </div>
    </div>
  );
};

export default Transactions;
