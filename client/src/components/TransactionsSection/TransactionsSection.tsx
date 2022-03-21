import Form from "../Form/Form";
import Transactions from "../Transactions/Transactions";
import "./TransactionsSection.scss";

interface TransactionsSectionProps {}

const TransactionsSection: React.FC<TransactionsSectionProps> = () => {
  return (
    <div className="grid grid--1x2">
      <Form />
      <Transactions />
    </div>
  );
};

export default TransactionsSection;
