import "./Input.scss";

interface InputProps {
  placeholder: string;
  type: string;
  step?: string;
  value?: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  name,
  handleChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="input"
    />
  );
};

export default Input;
