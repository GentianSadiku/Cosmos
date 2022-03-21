import shortenAddress from "../../utils/shortenAddres";
import "./Transaction.scss";

interface TransactionProps {
  id: number;
  message: string;
  keyword: string;
  timestamp: string;
  addressFrom: string;
  amount: string;
  addressTo: string;
}

const Transaction: React.FC<TransactionProps> = ({
  addressFrom,
  addressTo,
  amount,
  message,
  keyword,
  timestamp,
}) => {
  return (
    <div className="transaction">
      <div className="">
        <a
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <p>From: {shortenAddress(addressFrom)}</p>
        </a>

        <a
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          <p>To: {shortenAddress(addressTo)}</p>
        </a>

        <p>Amount: {amount} ETH</p>

        {/* {keyword && <p>Title: {keyword}</p>} */}

        {message && (
          <>
            <br />
            <p>Message: {message}</p>
          </>
        )}

        <div className="transaction--time">
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
