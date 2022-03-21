import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Input from "../Input/Input";
import "./Form.scss";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const { handleChange, sendTransaction, formData } =
    useContext(TransactionContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <form className="form">
      <h3>Send Eth</h3>
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={handleChange}
      />
      <Input
        placeholder="Title"
        name="keyword"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        handleChange={handleChange}
      />
      <button
        className="button button--default"
        onClick={(e) => handleSubmit(e)}
      >
        Send
      </button>
    </form>
  );
};

export default Form;
