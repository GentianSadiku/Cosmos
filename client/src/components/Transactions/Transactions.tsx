import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Transaction from "../Transaction/Transaction";
import "./Transactions.scss";

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="transactions">
      <div className="transactions__inner">
        {currentAccount ? (
          <div className="transactionList">
            <h3 className="transactions--headline">Latest transactions</h3>
            {[...transactions].reverse().map((transaction: any, i: number) => (
              <Transaction key={i} {...transaction} />
            ))}
          </div>
        ) : (
          <h4 className="text">
            Connect your account to see the latest transactions
          </h4>
        )}
      </div>
    </div>
  );
};

export default Transactions;
